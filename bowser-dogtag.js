NRF.nfcURL("https://www.teamgreyhound.com/greyhound/tp-baver/");
NRF.setAdvertising([
  require("ble_eddystone").get("goo.gl/v33TK9")
  ], {interval:700});