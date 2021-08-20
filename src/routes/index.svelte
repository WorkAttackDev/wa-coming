<script lang="ts">
	import { DateTime } from 'luxon';
	import { updates } from '../data/updates';
	import { onDestroy, onMount } from 'svelte';
	import Modal from '../components/Modal.svelte';
	import InstagramStrokeIcon from '../icons/InstagramStrokeIcon.svelte';
	import FacebookStrokeIcon from '../icons/FacebookStrokeIcon.svelte';
	import { fly } from 'svelte/transition';

	let intervalRef: NodeJS.Timeout;

	let showModal = false;

	const timeLabels = [
		{ label: 'Horas', time: '000' },
		{ label: 'Minutos', time: '000' },
		{ label: 'Segundos', time: '000' }
	];

	const contactInfo = {
		mains: [
			{
				text: '+244 997 267 270',
				img: '/imgs/whatsapp.svg',
				href: 'https://whats.link/workattack'
			},
			{
				text: 'geral@workattackangola.com',
				img: '/imgs/envelope.svg',
				href: 'mailto:geral@workattackangola.com'
			},
			{ text: 'Luanda, nova vida, rua nº 70, prédio nº 165', img: '/imgs/location.svg' }
		],
		extras: [
			{
				text: 'workattackteam',
				Icon: FacebookStrokeIcon,
				href: 'https://m.facebook.com/workattackteam/'
			},
			{ text: 'workattck', Icon: InstagramStrokeIcon, href: 'https://www.instagram.com/workattck/' }
		]
	};

	const realeseDate = DateTime.local(2021, 8, 20, 16, 0, 0);

	let timeLeft = realeseDate.diffNow('hours');

	onMount(() => {
		intervalRef = setInterval(() => {
			timeLeft = realeseDate.diffNow('hours');
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(intervalRef);
	});

	export const ifCSS = (condition: boolean, className: svelte.JSX.ClassName) =>
		condition ? className : '';
</script>

<Modal containerClasses="p-8 md:p-16" isOpen={showModal} on:close={() => (showModal = false)}>
	<h3 class="text-5xl text-gradient-design-animation font-semibold mb-16 md:text-6xl">Contactos</h3>
	<div class="mb-16">
		{#each contactInfo.mains as { img, text, href }}
			<a {href} class="flex items-center mb-8 last:mb-0" class:text-workattack={href}>
				<img src={img} alt={text} class="w-6 h-6 mr-4 object-contain md:mr-8 md:w-8 md:h-8" />
				<p class="text-xl md:text-3xl">{text}</p>
			</a>
		{/each}
	</div>
	<span class="flex text-white">
		{#each contactInfo.extras as { Icon, href }}
			<a {href} class="mr-16 last:mr-0">
				<Icon className={`w-8 h-8 object-contain ${ifCSS(!!href, 'text-workattack')}`} />
			</a>
		{/each}
	</span>
</Modal>
<main
	class="relative overflow-hidden layout-area grid gap-y-16 w-full min-h-screen bg-programming text-white p-8 md:p-16 md:pb-0"
>
	<img
		loading="eager"
		src="https://ik.imagekit.io/workattack/tr:w-0.7/pattern_5k6J341Po.png?tr=bl-6"
		alt="workattack pattern"
		class="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
	/>

	<img
		src="/imgs/logo_wa_gradient.svg"
		alt="workattack Gradient logo"
		class="absolute bottom-[-8.44%] blur-3xl animate-pulse-slow left-0 opacity-30 pointer-events-none z-0"
	/>
	<h1
		class="relative title-area flex flex-col text-5xl text-center mt-8 md:mt-0 md:mr-16 md:text-7xl md:text-left  lgx:text-[5rem]"
	>
		Estamos
		<p class="mt-4">a criar uma</p>
		<strong class="font-semibold text-gradient-design-animation mt-4">Nova Experiência</strong>
	</h1>

	<div class="relative wa-area w-full flex justify-center">
		<img
			transition:fly={{ duration: 500, y: 100 }}
			loading="eager"
			src="https://ik.imagekit.io/workattack/tr:w-0.6,pr-true/wa3D_JNHbkt-1lu.png?tr=bl-6"
			alt="workattack 3d art"
			class="max-w-3xl w-full drop-shadow-glow object-contain md:max-w-4xl md:min-w-[40rem]"
		/>
	</div>

	<article class="relative info-area flex flex-col items-center text-secondary md:items-start">
		<h3 class="text-3xl text-center font-semibold mb-8 md:text-left md:text-4xl">
			O que há de novo nesta atualização:
		</h3>
		<ol class=" text-2xl font-light md:text-3xl">
			{#each updates as name}
				<li class="flex items-center mb-4 last:mb-0">
					<img src="imgs/circle.svg" alt="cicle" class="mr-4 w-6 md:w-8" />
					{name}
				</li>
			{/each}
		</ol>
	</article>
	<article class="relative extra-area flex flex-col items-center mb-8 md:flex-row md:mb-0">
		<div class="grid grid-cols-3 gap-4 w-full max-w-lg mb-16 md:mb-0">
			{#each timeLabels as { label, time }, i}
				<span class="flex flex-col items-center p-2 bg-white/20 rounded-sm">
					<h6 class="text-3xl font-semibold tracking-wider md:text-4xl">
						{timeLeft.toFormat('hh:mm:ss').split(':')[i]}
					</h6>
					<p class="text-lg md:2xl">{label}</p>
				</span>
			{/each}
		</div>
		<button
			on:click={() => (showModal = true)}
			class="group relative flex flex-shrink-0 flex-col items-center cursor-pointer justify-center rounded-full w-16 h-16 bg-gradient-design shadow-orange transition active:scale-95 md:ml-12 md:w-24 md:h-24"
		>
			<p
				class="absolute inset-0 w-full h-full bg-gradient-design rounded-full animate-ping-small group-hover:animate-none"
			/>
			<img
				src="/imgs/phone.svg"
				alt="phone icon"
				class="relative animate-wiggle group-hover:animate-none"
			/>
		</button>
	</article>
</main>

<style global>
	.text-gradient-design-animation {
		@apply bg-gradient-to-r from-workattack to-animation bg-clip-text text-transparent;
	}

	@screen md {
		.layout-area {
			grid-template-areas:
				'title wa wa'
				'info wa wa'
				'extra wa wa';
		}

		.title-area {
			grid-area: title;
			align-self: center;
		}

		.wa-area {
			grid-area: wa;
		}

		.info-area {
			grid-area: info;
		}

		.logo-area {
			grid-area: logo;
		}
		.extra-area {
			grid-area: extra;
		}
	}
</style>
