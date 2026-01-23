# Claude Plugins by Yusuf Saber

A collection of plugins for Claude Code.

## Available Plugins

### islamic-reminders

Display Islamic reminders and dhikr during Claude Code sessions.

**Features:**
- Shows "In the name of Allah, the Most Gracious, the Most Merciful ﷽" at session start
- Displays random dhikr after each Claude response

**Included Reminders:**
- SubhanAllah - Glory be to Allah
- Alhamdulillah - All praise is due to Allah
- Allahu Akbar - Allah is the Greatest
- La ilaha illallah - There is no god but Allah
- Astaghfirullah - I seek forgiveness from Allah
- And more...

---

## Installation

### Step 1: Add the Marketplace

In Claude Code, run:

```
/plugin marketplace add ysaber/claude-plugins
```

### Step 2: Install the Plugin

```
/plugin install islamic-reminders@claude-plugins
```

### Step 3: Restart Claude Code

- **Mac/Linux:** Close terminal and run `claude` again
- **Windows:** Close the terminal window and run `claude` again

---

## Updating the Plugin

If you need to update to the latest version:

### Mac/Linux

```bash
rm -rf ~/.claude/plugins/marketplaces/claude-plugins
```

Then repeat the installation steps above.

### Windows

```cmd
rmdir /s /q "%USERPROFILE%\.claude\plugins\marketplaces\claude-plugins"
```

Then repeat the installation steps above.

---

## Uninstalling

```
/plugin uninstall islamic-reminders@claude-plugins
```

---

## Requirements

- Claude Code v2.0+
- Node.js (comes with Claude Code)

## License

MIT

## Author

Yusuf Saber
