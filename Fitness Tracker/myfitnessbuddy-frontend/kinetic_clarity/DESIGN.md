---
name: Kinetic Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#516070'
  on-secondary: '#ffffff'
  secondary-container: '#d5e4f8'
  on-secondary-container: '#576676'
  tertiary: '#3750a0'
  on-tertiary: '#ffffff'
  tertiary-container: '#5069bb'
  on-tertiary-container: '#eff0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e4f8'
  secondary-fixed-dim: '#b9c8db'
  on-secondary-fixed: '#0e1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#00164e'
  on-tertiary-fixed-variant: '#264191'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  h1:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1200px
  gutter: 16px
---

## Brand & Style
The design system is anchored in the concept of "Collaborative Clarity." It prioritizes high-performance utility with a welcoming, social atmosphere. The visual language is strictly **Minimalistic**, stripping away unnecessary ornamentation to focus on user progress and peer motivation. 

The personality is active, reliable, and transparent. By utilizing expansive whitespace and a structured card-based architecture, the UI reduces cognitive load, allowing users to focus on their health metrics and team goals. The aesthetic is modern and professional, leaning into a "Digital Health" movement that feels both clinical in its precision and human in its accessibility.

## Colors
This design system utilizes a high-trust blue palette to signal reliability and health. 

- **Primary Blue** is reserved for core actions and active states. 
- **Light Blue** acts as a supportive background for chips, highlights, or secondary containers.
- **Dark Blue** provides depth for high-level navigation or emphasis in typography.
- **Background and Card BG** create a clear distinction between the canvas and the content modules, ensuring that the "card-based" philosophy is immediately legible.
- **Text and Borders** follow a strict grayscale to maintain accessibility and visual hierarchy without competing with primary action colors.

## Typography
The typography strategy pairs **Lexend** for headings with **Inter** for functional UI and body text. 

Lexend was chosen for its athletic and readable character, providing a sense of momentum for headlines and data points. Inter provides a neutral, systematic foundation for all long-form content and interface labels, ensuring that the collaborative aspects of the system feel organized and utilitarian. 

Hierarchy is established through weight and color rather than excessive scale. Headers use the Dark Blue or Text Dark colors, while body text defaults to Text Dark for readability and Text Light for secondary information.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (12 columns) and a **Fluid Grid** on mobile devices. 

The rhythm is based on a 4px/8px incremental scale. Margins within cards and containers are generous (typically 24px) to emphasize the minimalistic, "airy" feel of the design. Elements are grouped using logical proximity; related metrics are tightly packed (8px-16px), while distinct content modules are separated by larger gaps (24px-40px). This "clear spacing" approach ensures that even data-heavy fitness dashboards remain approachable.

## Elevation & Depth
This design system uses **Ambient Shadows** to create a soft, tactile hierarchy. Depth is used sparingly to indicate interactivity.

- **Level 0 (Flat):** The main background surface.
- **Level 1 (Card):** Used for all content modules. Characterized by a very soft, diffused shadow: `0px 4px 12px rgba(31, 41, 55, 0.05)`.
- **Level 2 (Hover/Active):** Slightly more pronounced shadow to indicate a card is clickable or being interacted with: `0px 8px 24px rgba(31, 41, 55, 0.08)`.

Low-contrast outlines (the Border color) are used alongside shadows to define card boundaries on white backgrounds, ensuring the UI remains crisp on all display types.

## Shapes
The shape language is consistently **Rounded**. 

The base radius of 8px (0.5rem) is applied to buttons and small input fields. Larger containers and cards utilize a 16px (1rem) radius to soften the overall appearance of the dashboard. This rounded approach removes the "aggressive" corners often found in technical trackers, fostering a more friendly and inviting collaborative environment. Icons should follow a similar rounded corner radius to maintain visual harmony.

## Components

### Cards
Cards are the primary organizational unit. They feature the Card BG color, a subtle Level 1 shadow, and a 1px border. Content inside cards should follow the 24px (lg) padding rule.

### Buttons
- **Primary:** Solid Primary Blue with white text. Rounded (8px). 
- **Secondary:** Light Blue background with Primary Blue text. No border.
- **Ghost:** Transparent background with Text Light or Primary Blue text, used for less frequent actions.

### Inputs & Form Fields
Input fields use a white background with a 1px Border color stroke. On focus, the border transitions to Primary Blue with a subtle outer glow. Labels are always positioned above the field using the `label-caps` style.

### Navigation
The navigation menu uses a clean, vertical or horizontal layout with high-contrast active states (Primary Blue indicators). Icons in the menu should be paired with Inter body-sm text for maximum clarity.

### Chips & Badges
Small, pill-shaped indicators used for workout categories or status updates. These utilize the Light Blue background and Dark Blue text to provide high legibility without the visual weight of a button.