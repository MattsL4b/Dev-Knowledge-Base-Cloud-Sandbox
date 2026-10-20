---
title: "Resolving WSL2 Network Timeouts and Static DNS"
description: "How to fix WSL2 package manager and network resolution issues by disabling auto-generated resolv.conf."
pubDate: "2026-10-19"
category: "linux"
tags: ["wsl2", "networking", "dns", "ubuntu"]
draft: false
---

## Problem Overview
WSL2 can experience `ETIMEDOUT` errors during `npm install` due to auto-generated `/etc/resolv.conf` failing to resolve external hosts.

## Solution

1. Disable automatic DNS generation in `/etc/wsl.conf`:
   ```ini
   [network]
   generateResolvConf = false