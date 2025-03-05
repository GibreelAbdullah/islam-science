import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/islam-science" : "",
		},
		prerender: {
    entries: [
      '/',
      '/about',
      '/contact_us',
      '/fundamentals/basics_of_islam_-_study_resources',
      '/fundamentals/can_technology_fix_its_own_negative_effects',
      '/fundamentals/limitations_of_science',
      '/fundamentals/negative_impacts_of_technology',
      '/fundamentals/occasionalism',
      '/fundamentals/philosophy_of_science',
      '/fundamentals/philosophy_of_technology',
      '/fundamentals/proofs_for_god\'s_existence',
      '/fundamentals/scientism',
      '/fundamentals/spirituality_as_a_solution',
      '/fundamentals/sustainability_and_solutions',
      '/fundamentals/the_kalam_tradition',
      '/fundamentals/why_islam_is_true',
      '/fundamentals',
      '/main_topics/fiqh_&_ai',
      '/main_topics/height_of_prophet_adam_–_science_&_hadith',
      '/main_topics/islam_&_bioethics',
      '/main_topics/islam_&_ethical_use_of_technology',
      '/main_topics/islam_&_evolution',
      '/main_topics/islam_&_extraterrestrial_life',
      '/main_topics/islam_&_virtual_worlds',
      '/main_topics/kalam_atomism_&_quantum_mechanics',
      '/main_topics/quran_&_scientific_miracles',
      '/main_topics',
      '/personalities/dr._aasim_padela',
      '/personalities/dr._basil_altaie',
      '/personalities/dr._david_solomon_jalajel',
      '/personalities/dr._edward_omar_moad',
      '/personalities/dr._mehmet_bulgen',
      '/personalities/dr._nazif_muhtaroglu',
      '/personalities/dr._osman_bakar',
      '/personalities/dr._safaruk_chowdhury',
      '/personalities/dr._shoaib_ahmed_malik',
      '/personalities/dr._yaqoub_chaudhary',
      '/personalities/mufti_muntasir_zaman',
      '/personalities/professor_syed_muhammad_naquib_al_attas',
      '/personalities/shaykh_dr._rafaqat_rashid',
      '/personalities/shaykh_dr._sohaib_saeed',
      '/personalities/shaykh_faraz_a._khan',
      '/personalities/shaykh_hamza_karamali',
      '/personalities/shaykh_musa_furber',
      '/personalities/usthad_arnold_yasin_mol',
      '/personalities',
      '/resources/articles',
      '/resources/books',
      '/resources/societies_&_research_groups',
      '/resources/videos',
      '/resources'
    ]
  },
	}
};

export default config;
