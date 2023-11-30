---
layout: post
date: 2023-11-30 22:30:00 +1300
title: "Adopting old UniFi Video cameras into UniFi Protect"
description: "A frustrating experience, but we got there in the end..."
image: "assets/images/2023/11/30/unifi_video_upgrade_to_protect.png"
---
![](/assets/images/2023/11/30/unifi_video_upgrade_to_protect.png)

A few days ago, I was contacted by a friend who had just purchased 4 brand new [UniFi G3 Flex](https://store.ui.com/us/en/products/uvc-g3-flex) cameras from a [New Zealand based supplier](https://www.pbtech.co.nz/product/CCTUBI80313/Ubiquiti-UniFi-Protect-UVC-G3-FLEX-1080p-IndoorOut).

He told me he couldn't get any of them to show up in UniFi Protect, despite them powering up and showing a solid white LED indicating they were ready to adopt.

This was puzzling as he already had several other G3 Flex cameras, purchased a week before, connected to the same CloudKey Gen2+ all running without any issues.

I had a similar issue in the past with a few G3 Bullet cameras I picked up second hand, which were on older UniFi Video firmware, and UniFi Protect refused to see them as well...

After scanning his network with [Angry IP Scanner](https://angryip.org/), (I couldn't access his WiFi router to check the DHCP reservations), I found the IP addresses for the cameras, and logged in with the default credentials.

```
Username: ubnt
Password: ubnt
```

The login page was a dead give away that these cameras were in fact running older firmware as they showed the UniFi Video logo instead of the UniFi Protect logo. Let's look at the system information to see the specific version it was running. Wow, v4.2.59! As of this post, the latest firmware is v4.64.150

![](/assets/images/2023/11/30/uvc_g3_flex_firmware_v4.2.59.png)

Okay, so I determined these cameras needed to be updated to the latest firmware. I went over to the [Software Downloads](https://www.ui.com/download/software/uvc-g3-flex) page for the UVC-G3-Flex on the Ubiquiti website, and saw the latest firmware listed was v4.30.0 released on 25th September 2020. That's over 3 years ago!

![](/assets/images/2023/11/30/uvc_g3_flex_firmware_download.png)

I downloaded the firmware anyway, with the hopes it would resolve the issue, and flashed it via the `System` > `Firmware` section of the camera web interface. Flashing was successful, and the camera was now running UniFi Protect firmware. I could tell as the logo was now updated and the system information showed the new firmware version.

Then I waited for the camera to show up for adoption in UniFi Protect... and then I waited some more... and then I factory reset it a few times, but still, nothing...

According to a few posts in the forums (linked at the bottom), this old v4.30.0 UniFi Protect firmware was also too old to be detected by the latest version of UniFi Protect v2.8.35 (UniFi OS v3.1.14)...

So I followed a suggestion from one of the forum users, which was to pull the firmware from the CloudKey Gen2+ as it has the latest firmware it flashed to the other cameras cached in the downloads folder.

I pulled the latest firmware from the CloudKey to my Mac using the `scp` command, and then uploaded and flashed this firmware to the G3 Flex cameras via their web interface.

```
scp root@cloudkey-ip:/srv/unifi-protect/downloads/aef8-s2l-4.64.150-44b9a1b475574adbb5c3f47b4ebf743e.bin .
```

Flashing success, the cameras were now running UniFi Protect v4.64.150! Again, I factory reset the units and they still did not show up in UniFi Protect...

The last thing to try, other than to send them back to the supplier for an exchange, was to manually input the IP address of the CloudKey into the UniFi Protect Server field.

![](/assets/images/2023/11/30/unifi_protect_server_ip.png)

After clicking Save Changes, the cameras immediately showed up for adoption. Maybe if I had tried this from the start they would have shown up without the need to flash new firmware, but if I remember correctly I tried this on my G3 Bullet cameras and they did not show up...

Who knows, but that was a painful time for brand new units! Seems they were old stock being cleared out, and we were the unlucky recipients.

If only UniFi Protect could detect and update cameras with UniFi Video firmware automatically!

## References

- [https://reddit.com/r/Ubiquiti/comments/kmgbmp/uvc_g3_dome_not_able_to_adopt](https://www.reddit.com/r/Ubiquiti/comments/kmgbmp/uvc_g3_dome_not_able_to_adopt)
- [https://community.ui.com/questions/where-I-can-find-the-latest-firmware-version](https://community.ui.com/questions/where-I-can-find-the-latest-firmware-version/edfffa83-b954-4fd8-ade3-0a806ce45565)
- [https://community.ui.com/questions/New-G3-camera-doesnt-get-adopted-to-UniFi-Video-Server](https://community.ui.com/questions/New-G3-camera-doesnt-get-adopted-to-UniFi-Video-Server/aa955bfd-86d6-45c5-8982-6e41f4d8d8a7)
