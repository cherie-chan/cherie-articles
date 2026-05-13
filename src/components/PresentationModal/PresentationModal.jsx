import React, { useState, useEffect, useCallback, useRef } from "react";
import c from "./presentation-modal.module.scss";
import SlidesWrapper from "./SlidesWrapper/SlidesWrapper";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react";

const PresentationModal = ({ isOpen, onClose, slides, title, entity, year }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  // Request fullscreen
  const enterFullscreen = useCallback(async () => {
    if (modalRef.current && !document.fullscreenElement) {
      try {
        await modalRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.warn("Could not enter fullscreen:", err);
      }
    }
  }, []);

  // Exit fullscreen
  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.warn("Could not exit fullscreen:", err);
      }
    }
  }, []);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Enter fullscreen when modal opens and reset slide position
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0); // Reset to first slide when opening
      document.body.style.overflow = "hidden";
      // Small delay to ensure modal is rendered before going fullscreen
      setTimeout(() => {
        enterFullscreen();
      }, 100);
    } else {
      setCurrentSlide(0); // Reset slide when closing as well
      document.body.style.overflow = "unset";
      exitFullscreen();
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, enterFullscreen, exitFullscreen]);

  const handleClose = useCallback(() => {
    exitFullscreen();
    onClose();
  }, [exitFullscreen, onClose]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "F11") {
        e.preventDefault();
        isFullscreen ? exitFullscreen() : enterFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, handleClose, isFullscreen, enterFullscreen, exitFullscreen]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className={`${c.modal} ${isFullscreen ? c.fullscreen : ""}`}>
      <SlidesWrapper
        slides={slides}
        currentSlide={currentSlide}
        isFullscreen={isFullscreen}
        onNextSlide={currentSlide < slides.length + 1 ? nextSlide : null}
        title={title}
        entity={entity}
        year={year}
      />

      <div className={c.toolbar}>
        <button className={c.toolbarButton} onClick={prevSlide} disabled={currentSlide === 0}>
          <ChevronLeft size={16} />
        </button>
        <span className={c.slideCounter}>
          {currentSlide + 1} / {slides.length + 2}
        </span>
        <button className={c.toolbarButton} onClick={nextSlide} disabled={currentSlide === slides.length + 1}>
          <ChevronRight size={16} />
        </button>
        <div className={c.divider}></div>
        <button
          className={c.toolbarButton}
          onClick={isFullscreen ? exitFullscreen : enterFullscreen}
          title={isFullscreen ? "Exit Fullscreen (F11)" : "Enter Fullscreen (F11)"}>
          {isFullscreen ? <Minimize2 /> : <Maximize2 />}
        </button>
        <button className={c.toolbarButton} onClick={handleClose}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default PresentationModal;
