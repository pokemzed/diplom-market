export const getAdminKey = ():string | null => {
	const key = window.localStorage.getItem('key');
	return key ? key : null;
}
