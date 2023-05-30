import { writable } from 'svelte/store';

export const activeTabValue = writable(0);

export const enterCounter = writable(0);

export const reloadCounter = writable(0);

export const selected = writable(0);