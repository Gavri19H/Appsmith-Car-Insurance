export default {
	getPermissions () {
		const userEmail = appsmith.user.email;
		// Admins (KoDigital)
		if (userEmail.endsWith("@kodigital.io")) return "ALL";
		// Specific Users
		if (userEmail === "annamwitkop@gmail.com") return "Ana";
		if (userEmail === "liron@media-smarter.com") return "Liron";
		if (userEmail === "umang.g@frontstory.com") return "Liron";
		// Default deny
		return "NONE";
	},
	filterData (data) {
		if (!data || !Array.isArray(data)) return [];
		const permission = this.getPermissions();
		
		if (permission === "ALL") return data;
		if (permission === "NONE") return [];
		
		return data.filter(row => row.business === permission);
	}
}
