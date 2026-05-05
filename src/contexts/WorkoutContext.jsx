import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { previousMonday, getISODay, startOfMonth } from 'date-fns'
import workoutService from '../services/workoutService'
import { LoginContext } from '../pages/apps/login/LoginProvider'

const WorkoutContext = createContext()

export const WorkoutProvider = ({ children }) => {
  const { user } = useContext(LoginContext)
  const [workOutThisWeek, setWorkOutThisWeek] = useState(null)
  const [workOutThisMonth, setWorkOutThisMonth] = useState(null)
  const [loading, setLoading] = useState(true)

  const getWorkout = useCallback(async () => {
    if (!user.uid) return

    setLoading(true)
    try {
      const today = new Date()
      const isTodayMonday = getISODay(today) === 1
      const latestMonday = isTodayMonday ? today : previousMonday(today)
      const firstDayOfMonth = startOfMonth(today)

      // Fetch this month's workouts (includes this week's data)
      const monthWorkouts = await workoutService.getAllInDateRange(firstDayOfMonth, today)
      const monthWorkoutsList = monthWorkouts.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      monthWorkoutsList.sort((a, b) => a.createdAt.toDate() - b.createdAt.toDate())
      setWorkOutThisMonth(monthWorkoutsList)

      // Filter this week from month data (no extra read)
      const weekWorkoutsList = monthWorkoutsList.filter((workout) => {
        const workoutDate = workout.createdAt.toDate()
        return workoutDate >= latestMonday
      })
      setWorkOutThisWeek(weekWorkoutsList)
    } catch (error) {
      console.error('Error fetching workout data:', error)
    } finally {
      setLoading(false)
    }
  }, [user.uid])

  useEffect(() => {
    if (user.uid) {
      getWorkout()
    }
  }, [user.uid, getWorkout])

  const refreshWorkout = () => {
    getWorkout()
  }

  return (
    <WorkoutContext.Provider
      value={{
        workOutThisWeek,
        workOutThisMonth,
        loading,
        refreshWorkout,
      }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export const useWorkout = () => {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider')
  }
  return context
}
