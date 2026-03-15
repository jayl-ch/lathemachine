---
layout: component
title: Lead Screw
location: Runs along the length of the bed, under the carriage
animation: /assets/models/components/LEAD SCREW.glb
image_caption: "Lead screw assembly showing thread pitch"
function: "Precisely controls tool movement for creating threads and controlled feeds"
related_operations:
  - title: Threading
    url: /operations/threading/
  - title: Longitudinal feeding
    url: /operations/longitudinal-feeding/
  - title: Automatic feed operations
    url: /operations/automatic-feed/
---

## Overview

The lead screw is a long, threaded rod that runs along the bed. It is key for making precise threads and works with the carriage to ensure controlled, accurate cuts.

<div class="media-container model3d-container">
  <model-viewer 
    src="{{ page.animation | relative_url }}"
    alt="Headstock 3D Model"
    auto-rotate
    camera-controls
    style="width: 100%; height: 500px;">
  </model-viewer>
</div>

## Key Features

- **Precise Threads**: Accurate thread pitch
- **Long Length**: Extends full length of bed
- **Smooth Operation**: Low friction bearings
- **Engagement Mechanism**: Can be engaged or disengaged
- **Speed Control**: Works with motor to control feed rate

## Location

Runs horizontally along the entire length of the bed, typically underneath the carriage.

## Function Details

### Primary Functions

- Control carriage movement for threading
- Provide synchronized feed
- Enable automatic feeding
- Maintain precise pitch for threads

### Lead Screw Pitch

- Determines thread pitch that can be created
- Common pitches: 8 TPI, 10 TPI, 12 TPI
- Can be changed with gearing for different pitches

### Threading Process

1. Engage lead screw clutch
2. Set spindle speed
3. Position tool at thread start
4. Engage feed
5. Lead screw drives carriage at precise rate
6. Disengage at thread end

## Maintenance

- Keep clean and free of chips
- Apply appropriate machine oil
- Verify smooth rotation
- Check thread condition
- Inspect bearing operation

## Safety Notes

- Never use lead screw for manual carriage feed during threading
- Always disengage before reversing spindle
- Keep hands clear during threading

