---
layout: post
date: 2024-05-01 12:00:00 +1200
title: "Getting started with Meshtastic"
description: "A few recommendations and opinions on what hardware to use when getting started with Meshtastic"
image: "assets/images/2024/05/01/meshtastic.png"
---
![](/assets/images/2024/05/01/meshtastic_node.jpg)

Over the last few months, I've been playing with [Meshtastic](https://meshtastic.org/), an open-source "mesh" based long-range communications app (and firmware) based on [LoRa](https://en.wikipedia.org/wiki/LoRa) that runs on microcontroller development boards that you can pick up pretty cheap on [AliExpress](https://www.aliexpress.com/).

I decided to put this blog post together as I've been sending out various email replies with my recommendations, but think it will be good to put it all in one place, where it can be easily shared, and I can update it over time.

Below is a list of the devices I have used with Meshtastic, along with my comments for what they're good at, and what they're bad at.

Note that all my recommendations for frequencies and antennas are based on the New Zealand requirements.

**TLDR**

- If you want a cheap, basic device, to use with your phone, grab the Heltec v3.
- If you want GPS and don't care for a nice enclosure, get the Heltec Wireless Tracker.
- If you want to build a low power, solar node powered by batteries, get the RAK Wireless boards.

**Heltec v3**

- NZD $35 on AliExpress (add $5 for a plastic case)
- You will want the 902-928MHz version for New Zealand
- Max transmit power 22dBm (~150mW)
- Pro: Has a reasonable case
- Pro: Cheapest unit you can buy
- Pro: Supports connecting via Bluetooth and WiFi
- Pro: You can replace the antenna, the board uses an IPEX connector. This will greatly increase the range
- Con: Has a terrible stock antenna, you will struggle to send/receive unless you are very close to other devices
- Con: Has a terrible soldered Bluetooth antenna. Bluetooth range will be poor. You would need to solder the board to replace it
- Con: Does not have a GPS module, but you can share your position from your mobile phone GPS, or set a fixed position in settings
- Con: ESP32 based, so it draws ~100mA continuously while idling, even when not transmitting, so it's too power hungry for using as a solar node
- [Buy from AliExpress](https://s.click.aliexpress.com/e/_Dkn5miP)

**Heltec Wireless Tracker**

- NZD $40 on AliExpress (does not include a case)
- You will want the 902-928MHz version for New Zealand
- Max transmit power 22dBm (~150mW)
- Pro: Includes a GPS module, and can send its own position to the mesh without needing to be connected to any other devices
- Pro: Supports connecting via Bluetooth and WiFi
- Pro: Has a reasonable stock antenna, I can send/receive with my [hilltop node](/assets/images/2024/05/01/meshtastic_node.jpg) even with the antenna lying sideways on the seat inside my car.
- Pro: You can replace the antenna, the board uses an IPEX connector.
- Con: Has a terrible soldered Bluetooth antenna. Bluetooth range will be poor. You would need to solder the board to replace it
- Con: Does not include a plastic case, and seems to be hard to find any 3D printed cases online
- Con: ESP32 based, so it draws ~100mA continuously while idling, even when not transmitting, so it's too power hungry for using as a solar node
- [Buy from AliExpress](https://s.click.aliexpress.com/e/_DEgvwk3)

**RAK Wireless: Meshtastic Starter Kit**

- NZD $40 on RAK Wireless website (excluding shipping)
- You will want the 900MHz (AU915) version for New Zealand
- Includes 1x WisBlock Base (RAK19007), 1x WisBlock Core (RAK4631), 1x LoRa Antenna, 1x BLE Antenna
- Max LoRa transmit power 22dBm (~150mW)
- Max Bluetooth transmit power 4dBm (~2.5mW)
- Does not include a GPS module by default, buy you can purchase separately and easily clip on to base board
- Pro: Supports connecting via Bluetooth
- Pro: Has reasonable stock antennas. The stock bluetooth antenna gets very good range
- Pro: You can replace both the LoRa and Bluetooth antennas, the board uses IPEX connectors
- Pro: Not based on ESP32, and only sips ~2mA continuously while idling (excluding transmitting), so it's perfect for using as a solar node with 18650 lithium cells
- Con: Does not include WiFi
- Con: Does not include a plastic case, however there are many enclosures available to buy or 3D print
- [View Datasheet](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Datasheet)
- [Buy from RAK Wireless](https://rakwireless.kckb.st/liamcottle-bcy)

**Antenna Recommendations**

RAK Wireless: Blade Antenna
- NZD $10 (excluding shipping)
- You will want the 902-928MHz version for New Zealand
- Max Gain: 2.3 dBi
- VSWR: ≤ 1.5
- Vertically polarized
- [View Datasheet](https://docs.rakwireless.com/Product-Categories/Accessories/RAKARJ16/Overview/)
- [Buy from RAK Wireless](https://rakwireless.kckb.st/liamcottle-hg2)

**Delivery Timeframes**

- AliExpress usually has my orders delivered from China to New Zealand within 7-10 days.
- RAK Wireless delivered from China to New Zealand in 13 days. However, I was not sent a tracking link until 10 days after ordering.

**Meshtastic Map**

I have built an open-source web based map for Meshtastic. It shows all the nodes heard on the public MQTT server, and allows for viewing their metrics and status.

It is optimised for viewing on mobile devices, and allows you to share a direct link to your node.

You can view my online map here:

- [https://meshtastic.liamcottle.net](https://meshtastic.liamcottle.net)

If you'd like to view the source code, or host it yourself, you can find it on GitHub:

- [https://github.com/liamcottle/meshtastic-map](https://github.com/liamcottle/meshtastic-map)

**Public Meshtastic Groups**

- Facebook: [Meshtastic](https://www.facebook.com/groups/730536684339042)
- Facebook: [Meshtastic NZ](https://www.facebook.com/groups/731677999061283)
- Discord [Meshtastic](https://discord.com/invite/ktMAKGBnBs)

## Reticulum?

Another interesting project I'm tinkering around with is Reticulum. I may write up a blog post on this sometime in the future.
In the meantime, feel free to check it out.

- [https://reticulum.network/](https://reticulum.network/)
- [https://unsigned.io/rnode](https://unsigned.io/rnode)
- [https://unsigned.io/private-messaging-over-lora/](https://unsigned.io/private-messaging-over-lora/)
- [https://github.com/markqvist/Reticulum](https://github.com/markqvist/Reticulum)

I recently released an open source web chat interface for this project.

- [https://github.com/liamcottle/reticulum-webchat](https://github.com/liamcottle/reticulum-webchat)
