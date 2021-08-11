<slot />

<style global>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700&display=swap');

	@layer base {
		html {
			font-size: 62.5%;
			font-family: 'Rubik', sans-serif;
		}
	}

	@layer utilities {
		.drop-shadow-glow {
			filter: drop-shadow(-2rem 0.4rem 2rem rgba(123, 97, 255, 0.1))
				drop-shadow(2rem -0.2rem 2rem rgba(255, 129, 28, 0.1));
		}
	}
</style>
