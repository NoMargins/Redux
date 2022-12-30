export const SETLANGUAGE = 'LANGUAGE/SET';

export const setLanguage = (lang) => {
	return {
		type: SETLANGUAGE,
		payload: {
			language: lang,
		},
	};
};
