import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const localStorageKey = 'theme';

export enum Themes {
	Light = 'light',
	Dark = 'dark'
}

const localStorageTheme = (browser && localStorage.getItem(localStorageKey)) || Themes.Light;

export const theme = writable(localStorageTheme);

theme.subscribe((value) => {
	if (browser)
		localStorage.setItem(localStorageKey, value === Themes.Dark ? Themes.Dark : Themes.Light);
});
