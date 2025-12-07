To build this out using an Agentic IDE (like Cursor, Windsurf, or Replit Agent), you need a single, comprehensive Context File that defines the rules, the source material, and the strict "Americanization" logic.

Below is the Master Project Brief you can copy and paste directly into your AI coding tool. Following that is the list of Source URLs the agent needs to scrape for images and assets.

1. Master Context File (Copy into AI Agent)
This prompt tells the AI exactly how to build the site, enforcing the specific constraints found in the research (like "Short Tons" vs "Metric Tonnes" and strict OSHA safety visuals).

Project: Trading Solutions LLC (Dallas Expansion) - Website Build
1. Core Objective
Build a unified corporate website for "Trading Solutions LLC" based in Dallas, Texas. This site merges two existing UAE business lines into one US entity:

Industrial Scrap Recycling (formerly Trading Solutions FZE)

Oil & Gas Equipment Supply (formerly Shoreline Oilfield)

2. Design System & Brand Identity ("Texas Industrial")
Visual Vibe: Professional, heavy industrial, "Texas Steel." Cool tones (steel grey, navy blue) rather than warm "desert" tones.

Primary Color: "Shoreline Blue" (Deep Navy - from Shoreline Oilfield assets).

Accent Color: "Safety Yellow" (OSHA standard - used for buttons/highlights).

Typography: Strong, blocky Sans-Serif headers (e.g., Roboto, Montserrat).

Layout: "Split-Funnel" Homepage. The user must choose their path (Scrap or Oilfield) immediately to avoid confusion.

3. Strict "Americanization" Rules (CRITICAL)
No Metric Units: Convert all "Metric Tonnes" to "Short Tons" (2,000 lbs). Convert "Bar" pressure to "PSI".

Image Filtering:

Do not use images with palm trees, distinct desert sand, or non-US license plates.

Safety Compliance: If showing workers, they MUST be wearing hard hats and high-vis vests. (If scraping old images, apply CSS filters or overlays to obscure non-compliant safety gear).

Terminology Swaps:

"General Trading" -> "Industrial Supply" or "Asset Recovery"

"Yard" -> "Processing Facility"

"Waste Trading" -> "Recycling Services"

4. Site Architecture & Pages
A. Homepage (The Gateway)

Split Screen Hero:

Left: "Turn Scrap into Revenue" (Recycling Division).

Right: "Premium Oilfield Supply" (Energy Division).

Trust Bar: "Texas Licensed" | "API Supply Chain" | "24/7 Logistics".

B. Scrap Division (Microsite)

Audience: Demolition contractors, Manufacturing plants.

Key Features:

"Container Service" (Roll-off bins).

"Compliance": Mention Texas Occupations Code Ch. 1956.

"Seller Guide": List ID requirements for selling scrap.

C. Oilfield Division (Microsite)

Audience: Drilling engineers, Procurement managers.

Key Features:

Product Catalog: Valves, Flanges, Drilling Rigs (Sourced from Shoreline).

"Traceability": Mention MTRs (Mill Test Reports) available for all steel.

"Certifications": API 6A, API Q1 compliant sourcing.

5. Technical Stack Requirements
Framework: Next.js (App Router).

Styling: Tailwind CSS (use slate-900 for darks, amber-500 for safety accents).

Components: Lucide React for icons (use industrial icons like Wrench, Recycle, HardHat).

Forms: Dynamic logic. If user selects "Scrap", ask for "Tonnage". If "Oilfield", ask for "Part Number".

6. Footer Requirements (Compliance)
Must include: "Trading Solutions LLC is a registered Metal Recycling Entity in the State of Texas."

Must include: "Compliance: Texas Occupations Code Chapter 1956."

2. Asset Source List (URLs for the Agent)
You need to tell the agent exactly where to get the "Raw Material" (images and text). Provide these URLs to the agent so it knows where to look.

A. Your Primary Source Websites (Scrape these for content):

For Scrap Metal Content: https://tradingsolutionsfze.com/

Instruction to Agent: "Extract images of scrap piles, machinery, and loading operations from this site. Ignore any 'desert' backgrounds or 'General Trading' text."

For Oil & Gas Content: https://shorelineoilfielduae.ae/

Instruction to Agent: "Extract the product catalog text (Valves, Flanges, Rigs) and high-res equipment photos. Use the 'Shoreline Blue' color from this site as our primary brand color."

B. Compliance & Trust Badges (Reference Only):

American Petroleum Institute (API): https://www.api.org/

Instruction to Agent: "Create a placeholder section for 'API Certified Supply Chain' using a generic badge style if official assets are not available."

Texas Department of Public Safety (Regulatory): https://www.dps.texas.gov/section/texas-metals-program

Instruction to Agent: "Reference the 'Texas Metals Program' in the footer text to establish local legality."   

OSHA (Safety Standards): https://www.osha.gov/

Instruction to Agent: "Ensure any stock photos selected match the safety standards visible on this site (High-vis vests, proper hard hats)."   

C. Competitor Benchmarks (For Style/Layout Inspiration):

Instruction to Agent: "Look at Geomet Recycling (geometrecycle.com) for how a Dallas scrap yard should look. Look at Liberty Energy (libertyenergy.com) for the clean, blue aesthetic of a US oilfield company."