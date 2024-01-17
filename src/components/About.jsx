import React from "react";
import homeImage from "../assets/homeImage.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-[#faebd7] text-[#556b2f]">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-4xl mx-auto px-4 w-full grid sm:grid-cols-2 gap-8">
          <div className="text-center sm:text-right pb-8">
            <p className="text-2xl sm:text-3xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image added here */}
          <img
            src={homeImage}
            alt="About"
            className="w-full md:col-span-2 lg:col-span-1 h-auto object-cover"
          />

          <div className="text-base sm:text-lg md:col-span-2 lg:col-span-2">
            {/* Text content */}
            <p>
              Claire F. Cario is a Delaware native who moved to NYC in 1996. She
              has been working within the animal welfare and veterinary medicine
              fields since 2001. She received her MA in the Advanced Psychology
              of Animal Behavior and Conservation in 2008. The most rewarding
              aspect of her work is strengthening the human-animal bond and
              seeing her clients achieve a deeper understanding of their dog’s
              communication, motivations and behaviors. Claire started her own
              business in 2009 and since then, has supervised, managed, and
              trained animal behavior staff across all sectors of the animal
              behavior world, developed curriculum for training programs for
              training schools, municipal shelters, and therapy dog programs,
              given webinars on canine behavior topics, built behavior
              assessment systems, and developed individualized behavior training
              plans for dogs displaying a wide variety of behavior concerns. She
              is certified through the Certification Council for Professional
              Dog Trainers and a Fear Free Certified Professional. Currently
              Claire is a Behavior Consultant for Behavior Vets of NYC and an
              instructor at CATCH Academy. Prior to this, she spent three years
              as the Private Trainer Manager at School For the Dogs in NYC, four
              years as the Behavior and Enrichment Assistant Manager at Animal
              Care Centers of NYC, three years as a behavior consultant on the
              ASPCA Anti-Cruelty Behavior Team, six years as the executive
              trainer and coordinator for The Good Dog Foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
