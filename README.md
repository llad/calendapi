# calendapi
manage work week calendars

## setup
* create repo in github
* launch codespace for repo
* curl https://bun.sh/install | bash
* nano ~/.bashrc, add: 
export BUN_INSTALL="$HOME/.bun" 
export PATH="$BUN_INSTALL/bin:$PATH" 
* source ~/.bashrc
* bun create hono ./
* bun update hono
* npm install hono -- seems like bun add/install isn't reliable yet ???
* bun run start -- verify setup
* ctrl-c -- to stop