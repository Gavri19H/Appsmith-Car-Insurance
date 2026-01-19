export default {
	// Default on page load
	onPageLoad: async () => {
		// Set default dates if needed, or leave empty
	},

	// Triggered by 'Run' button
	fetchData: async () => {
		// Validate Inputs
		if (!DatePicker_Start.selectedDate || !DatePicker_End.selectedDate) {
			showAlert("Please select both start and end dates.", "error");
			return;
		}
		if (!Select_Type.selectedOptionValue) {
			showAlert("Please select a dimension type (State, Age, or Provider).", "error");
			return;
		}

		// Run API
		showAlert("Fetching data...", "info");
		try {
			await Retriever_API.run();
			showAlert("Data fetched successfully!", "success");
		} catch (error) {
			showAlert("Failed to fetch data: " + error.message, "error");
		}
	}
}