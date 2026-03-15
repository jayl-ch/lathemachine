---
layout: component
title: Carriage
location: Moves along the bed between headstock and tailstock
animation: /assets/models/components/CARRIAGE.glb
image_caption: "Carriage assembly with tool post and cross slide"
function: "Moves along the bed carrying the cutting tool and controlling its position"
related_operations:
  - title: Turning
    url: /operations/turning/
  - title: Facing
    url: /operations/facing/
  - title: Grooving
    url: /operations/grooving/
  - title: Threading
    url: /operations/threading/
---

## Overview

The carriage is the moving part that rides along the bed, carrying the cutting tool. It allows the tool to move side-to-side (longitudinal) and front-to-back (cross-feed).

<div class="media-container model3d-container">
  <model-viewer 
    src="{{ page.animation | relative_url }}"
    alt="Carriage 3D Model"
    auto-rotate
    camera-controls
    style="width: 100%; height: 500px;">
  </model-viewer>
</div>

## Key Features

- **Tool Post Mount**: Holds the cutting tool
- **Cross Slide**: Controls depth of cut
- **Handwheels**: Manual feed control
- **Smooth Bearings**: Ensure smooth movement

## Location

Positioned on the bed between the headstock and tailstock, it moves longitudinally along the entire length.

## Function Details

### Primary Functions

- Carry and position the cutting tool
- Provide longitudinal movement (along the bed)
- Provide cross-feed movement (perpendicular to bed)
- Allow precise tool placement

### Movement Types

- **Longitudinal Feed**: Movement along the bed axis
- **Cross Feed**: Movement perpendicular to the bed
- **Manual Control**: Via handwheels
- **Automatic Feed**: Powered by lead screw or feed rod

## Components

The carriage assembly includes:

- Main carriage body
- Cross slide
- Tool post
- Compound rest (on some machines)
- Apron with control mechanisms

## Maintenance

- Keep ways clean and lubricated
- Check for smooth movement
- Ensure handwheels turn smoothly
- Verify precise positioning

