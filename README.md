# Nixie Clock

This repo is for a webpage that displays a digital version of a Nixie Tube clock.

I had the idea of creating an actual Nixie Tube clock using actual hardware and a microcontroller.

Then I realized that I didn't have the space to work on it.

My goal for creating this clock was to work on my technical skills and create something pleasant to look at.

I decided that, until I have the space for a physical clock project, I should create a digital clock project.

To see a real Nixie Tube clock, see this [video](https://www.youtube.com/watch?v=V1bPK1YQE60).

And that's where this begins: the Nixie Clock...

NOTES:

- To reduce the brightness of the seconds when changing:

  Lower the opacity value in @keyframes flash (currently 0.9, try 0.85).
  Reduce the scaling effect (scale(1.02)) to make transitions more subtle.

- To make flickering less noticeable:

  Increase the animation duration (2s → 2.5s) inside .illuminated.
  Reduce the opacity variation in @keyframes flicker (e.g., keep it between 0.98 and 1 instead of 0.96 and 1).

- Where to Adjust the Flash for Seconds?

  Inside styles.css, look for @keyframes flash
  Reduce opacity (0.9 → 0.85 or 0.8) to lower brightness
  Reduce scaling (scale(1.02) → scale(1.01)) to make it less noticeable
  Shorten duration (0.08s → 0.06s) for a quicker transition
