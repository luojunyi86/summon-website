# SUMMON Website Deployment Notes

## Domain and Server

- Domain: `summonskate.com`
- Server: Tencent Cloud Lighthouse, Hong Kong
- Public IP: `150.109.158.211`
- Server root directory: `/www/wwwroot/summonskate.com`

## Live URLs

- Official website: `https://summonskate.com`
- Self-entry page: `https://summonskate.com/entry`

## Repository Split

### `luojunyi86/summon-website`

Purpose:
- Controls the official website root.
- Used for homepage and normal content pages.

Deployment target:
- `/www/wwwroot/summonskate.com`

Rules:
- Must not overwrite or delete `/www/wwwroot/summonskate.com/entry`.
- Do not use this repository to manage the self-entry page.

### `luojunyi86/summon-entrance`

Purpose:
- Controls only the self-entry page.

Deployment target:
- `/www/wwwroot/summonskate.com/entry`

Rules:
- Must not affect `/www/wwwroot/summonskate.com/index.html`.
- Must not overwrite the official website homepage.

## GitHub Actions Secrets

Each repository that deploys to the server needs its own repository secrets:

- `SERVER_HOST = 150.109.158.211`
- `SERVER_PORT = 22`
- `SERVER_USER = root`
- `SERVER_SSH_KEY = server SSH private key`

Do not share the private key in chat or commit it into the repository. It must only be pasted into GitHub Secrets.

## Codex Instructions

For website changes:

```text
Only modify luojunyi86/summon-website.
Do not modify luojunyi86/summon-entrance.
This change is only for the official website.
Deployment must not overwrite /www/wwwroot/summonskate.com/entry.
```

For self-entry changes:

```text
Only modify luojunyi86/summon-entrance.
Do not modify luojunyi86/summon-website.
This change is only for the self-entry page.
Deployment target must be /www/wwwroot/summonskate.com/entry.
Do not affect the official website homepage.
```

## Core Rule

`website` controls the root site.
`entrance` controls `/entry`.
The two repositories deploy independently and must not overwrite each other.

## Deprecated / Not Important

- Old `entry.html` test page is no longer the official entry URL.
- Official self-entry URL should be `/entry`.
- Netlify is not used for the current production deployment.
- Current production deployment is GitHub Actions to Tencent Cloud server.
