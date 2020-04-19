install:
	npm install

start:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-nod:
	node bin/brain-nod.js

brain-progression: 
	node bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .