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
      '/islam-science/',
      '/islam-science/FRONTPAGE',
      '/islam-science/about',
      '/islam-science/contact_us',
      '/islam-science/fundamentals/basics_of_islam_study_resources',
      '/islam-science/fundamentals/can_technology_fix_its_own_negative_effects',
      '/islam-science/fundamentals/limitations_of_science',
      '/islam-science/fundamentals/negative_impacts_of_technology',
      '/islam-science/fundamentals/occasionalism',
      '/islam-science/fundamentals/philosophy_of_science',
      '/islam-science/fundamentals/philosophy_of_technology',
      '/islam-science/fundamentals/proofs_for_god\'s_existence',
      '/islam-science/fundamentals/scientism',
      '/islam-science/fundamentals/spirituality_as_a_solution',
      '/islam-science/fundamentals/sustainability_and_solutions',
      '/islam-science/fundamentals/the_kalam_tradition',
      '/islam-science/fundamentals/why_islam_is_true',
      '/islam-science/fundamentals',
      '/islam-science/images/addingimages',
      '/islam-science/main_topics/fiqh_&_ai',
      '/islam-science/main_topics/height_of_prophet_adam_-_science_&_hadith',
      '/islam-science/main_topics/islam_&_ai_-_consciousness',
      '/islam-science/main_topics/islam_&_bioethics',
      '/islam-science/main_topics/islam_&_ethical_use_of_technology',
      '/islam-science/main_topics/islam_&_evolution',
      '/islam-science/main_topics/islam_&_extraterrestrial_life',
      '/islam-science/main_topics/islam_&_virtual_worlds',
      '/islam-science/main_topics/kalam_atomism_&_quantum_mechanics',
      '/islam-science/main_topics/quran_&_scientific_miracles',
      '/islam-science/main_topics',
      '/islam-science/new_additions',
      '/islam-science/personalities/dr._aasim_padela',
      '/islam-science/personalities/dr._basil_altaie',
      '/islam-science/personalities/dr._david_solomon_jalajel',
      '/islam-science/personalities/dr._edward_omar_moad',
      '/islam-science/personalities/dr._mehmet_bulgen',
      '/islam-science/personalities/dr._nazif_muhtaroglu',
      '/islam-science/personalities/dr._osman_bakar',
      '/islam-science/personalities/dr._safaruk_chowdhury',
      '/islam-science/personalities/dr._shoaib_ahmed_malik',
      '/islam-science/personalities/dr._yaqoub_chaudhary',
      '/islam-science/personalities/mufti_muntasir_zaman',
      '/islam-science/personalities/professor_syed_muhammad_naquib_al_attas',
      '/islam-science/personalities/shaykh_dr._rafaqat_rashid',
      '/islam-science/personalities/shaykh_dr._sohaib_saeed',
      '/islam-science/personalities/shaykh_faraz_a._khan',
      '/islam-science/personalities/shaykh_hamza_karamali',
      '/islam-science/personalities/shaykh_musa_furber',
      '/islam-science/personalities/shaykh_nuh_keller',
      '/islam-science/personalities/usthad_arnold_yasin_mol',
      '/islam-science/personalities',
      '/islam-science/resources/articles',
      '/islam-science/resources/books',
      '/islam-science/resources/courses',
      '/islam-science/resources/societies_&_research_groups',
      '/islam-science/resources/videos',
      '/islam-science/resources'
    ]
  },
	}
};

export default config;
