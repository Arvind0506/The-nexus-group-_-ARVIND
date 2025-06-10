
<b>1. Circuit Setup</b>

<ul>
  <li>Connect the BJT (NPN or PNP) in a common-emitter configuration.</li>

<li>Connect a suitable resistor (Rc) in series with the collector.</li>

<li>Connect a load (e.g., LED or another resistor) in the collector branch if needed.</li>

<li>Connect a base resistor (Rb) to limit the base current.</li>

<li>Connect the power supply (Vcc) across the collector and emitter terminals.</li></ul>



<b>2. Biasing the Transistor for Cut-off Region</b>

<ul>
  <li>Apply zero or very small base current (Ib ≈ 0).</li>

<li>Measure the voltage across the collector-emitter (Vce) — it should be approximately Vcc, indicating the transistor is OFF.</li>

<li>Note the collector current (Ic ≈ 0).</li></ul>



<b>3. Biasing the Transistor for Saturation Region</b>

<ul>
  <li>Increase the base current by adjusting the base voltage to turn the transistor ON.</li>

<li>Ensure that Ib is large enough to saturate the transistor (Ib ≥ Ic/β).</li>

<li>Measure Vce — it should be very low (near 0V), indicating the transistor is ON.</li>

<li>Note the collector current (Ic), which should be close to Vcc/Rc.</li></ul>



<b>4. Observe and Record</b>
<ul>
<li>Record the values of Vce, Ib, and Ic for both cut-off and saturation conditions.</li>

<li>Plot the output characteristics if required.</li></ul>


<b>5. Switching Demonstration</b>
<ul>
<li>Use a square wave signal at the base to toggle the transistor between cut-off and saturation.</li>

<li>Observe the switching action at the collector using an oscilloscope.</li>
