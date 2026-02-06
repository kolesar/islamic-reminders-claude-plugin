# Auto-Update Plugin for Claude Code

Automatically updates Claude Code when a new version is available via your package manager.

## Installation

### Step 1: Add the Marketplace

```bash
/plugin marketplace add ysaber/islamic-reminders-claude-plugin
```

### Step 2: Install the Plugin

```bash
/plugin install auto-update@islamic-reminders-claude-plugin
```

### Step 3: Restart Claude Code

Close your terminal and run `claude` again.

## (Optional) Hide the built-in update notification

Since this plugin handles updates, you can hide Claude's "Update available!" message.

**macOS/Linux** - Add to `~/.zshrc` or `~/.bashrc`:
```bash
export DISABLE_AUTOUPDATER=1
```

**Windows** - Add to PowerShell profile:
```powershell
$env:DISABLE_AUTOUPDATER = "1"
```

## Supported Package Managers

| Platform | Package Manager |
|----------|-----------------|
| macOS    | Homebrew        |
| Windows  | winget          |
| Linux    | apk (Alpine)    |
| All      | npm (fallback)  |

## How It Works

1. On session start, checks if your package manager has a newer version
2. If available, automatically runs the upgrade
3. Restart Claude Code to use the new version

## FAQ

**Will this slow down startup?**
No, the check is fast (< 1 second).

**Why am I one version behind?**
Package managers may take up to 24 hours to publish new releases. This is normal.

## License

MIT
