"use client";

import { SparklesText } from "./magicui/sparkles-text";
import { CoolMode } from "./magicui/cool-mode";
import { VenueCardComponent } from "./myui/venue-card-component";
import HeadingSparkle from "./myui/heading-sparkle";

export function VenueCard() {
  const baseUrl = import.meta.env.BASE_URL;
  const masjidImgurl = `${baseUrl}/img/masjid.webp`;
  const hallImgUrl = `${baseUrl}img/hall.png`;
  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-950 py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <HeadingSparkle
          heading="Venue Details"
          description="All about the venue, directions, timings, and more."
        />

        <VenueCardComponent
          eventType="Nikah"
          venueName="Masjid Al Noor"
          venueAddress="Dickenson Road"
          eventDate="Thursday, 19th June 2025"
          eventTime="After Maghrib Salah"
          venueImage={masjidImgurl}
          moreInfoLink="https://g.co/kgs/unsRJoW"
          directionsLink="https://maps.app.goo.gl/PFsZHCmXtZLzUF1D6"
          announcement="🤍 Keep us in your righteous duʿās 🤍"
          swatchColor="pink"
        />

        <VenueCardComponent
          eventType="Valima"
          venueName="Cutchi Memon Jamath Khana Hall"
          venueAddress="Kamraj Road"
          eventDate="Thursday, 19th June 2025"
          eventTime="8:00 PM onwards"
          venueImage={hallImgUrl}
          moreInfoLink="https://g.co/kgs/FQyPGmy"
          directionsLink="https://maps.app.goo.gl/Ar59os8sC4SLEAPu5"
          announcement="🎉 Celebration Begins • Free Parking for All!"
          swatchColor="emerald"
        />
      </div>
    </section>
  );
}
