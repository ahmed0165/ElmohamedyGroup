/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

// Reusable Section Component with Enhanced Interactions
const Section = ({
  id,
  title,
  children,
  bgColor,
  textColor,
  subtitle = "",
  icon: Icon,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-24 px-8 ${bgColor} transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {Icon && <Icon className={`mx-auto mb-6 ${textColor}`} size={64} />}
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
