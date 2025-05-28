# Theory

## What is a Transistor?

A transistor is a three-terminal semiconductor device that can amplify or switch electronic signals. The most common type is the Bipolar Junction Transistor (BJT), which comes in two types:  

<li>NPN</li>

<li>PNP</li>

In this experiment, we are using an NPN transistor (e.g., BC547).

## Construction of NPN Transistor

An NPN transistor consists of two n-type semiconductors separated by a thin layer of p-type material. It has three terminals:

<b>• Emitter (E)</b> – Heavily doped; emits electrons.

<b>• Base (B)</b> – Thin and lightly doped; controls the transistor.

<b>• Collector (C) </b>– Moderately doped; collects electrons.

## Working Principle of NPN Transistor

In an NPN transistor:

<li>Electrons are the majority carriers.</li>

<li>When a small current is applied to     the base, it allows a much larger       current to flow from the collector      to emitter.</li>


This property allows it to act as a switch or amplifier.

## Transistor Operating Modes

<table> 
  <tr>
    <th>Mode</th>
    <th>V<sub>BE</sub></th>
    <th>V<sub>CE</sub></th>
    <th>Base Current	</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Cut-off</td>
    <td> <0.7V</td>
      <td>High (~Vcc)</td>
      <td>0</td>
      <td>Transistor is OFF (Open)</td>
    </tr>
    <tr>
      <td>Active</td>
      <td> ~0.7V</td>
      <td>Moderate (~Vcc)</td>
      <td>Small</td>
      <td>Used for amplification</td>
    </tr>
    <tr>
      <td>Saturation</td>
      <td> ≥ 0.7V</td>
      <td>Low (~0.2V) (~Vcc)</td>
      <td>Present</td>
      <td>Transistor is ON (Closed)</td>
    </tr> 
  </table>

## Transistor as a Switch

When using an NPN transistor as a switch:

<b> OFF State (Cut-off Mode)</b>

<li>Base-emitter junction is not forward biased.</li>

<li>No base current → No collector current.</li>

<li>The path from collector to emitter is   open.</li>

<li>Load (e.g., LED) remains OFF.</li>


<b> ON State (Saturation Mode)</b>

<li>A voltage (> 0.7V) is applied to the base through a resistor.</li>

<li>Base current flows → Collector current starts flowing.</li>

<li>The transistor behaves like a closed switch.</li>

<li>The LED gets current and glows.</li>

## Why Use a Base Resistor

The base resistor (typically 1kΩ) limits the base current to prevent damage to the transistor. It also ensures that the transistor switches cleanly between ON and OFF states.

## Advantages of Using a Transistor as a Switch

<li>Fast switching speed. </li>

<li>Small size and low cost. </li>

<li>Low power consumption. </li>

<li>Easily controlled by microcontrollers (like Arduino, etc.)</li>
