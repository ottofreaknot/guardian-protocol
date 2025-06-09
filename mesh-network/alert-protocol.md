# 📡 Alert Protocol

1. Wearable is triggered (biometric, manual, anomaly).
2. Nearby Guardian Cube receives BLE signal.
3. Cube emits:
   - LED + Audio Alert
   - Mesh Broadcast Ping (to other Cubes or nodes)
   - Optional Internet fallback (if enabled)

4. Pings include:
   - Unique Alert ID
   - Timestamp
   - Location (if enabled)
   - Alert Type (silent, scream, restraint)

5. Public witness logs if enabled.
