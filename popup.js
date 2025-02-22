document.getElementById("saveButton").addEventListener("click", () => {
	const maxTime = parseInt(document.getElementById("maxTime").value)
	const transitionTime = parseInt(
		document.getElementById("transitionTime").value
	)
	const enabled = document.getElementById("enabled").checked
	const oneSegment = document.getElementById("oneSegment").checked

	const config = {
		maxTime,
		transitionTime,
		enabled,
		oneSegment,
	}

	chrome.storage.local.set({config}, () => {
		console.log({config})
	})

	chrome.action.setBadgeText({text: config.enabled ? "" : "off"})

	window.close()
})

// Load saved settings
chrome.storage.local.get(["config"], (result) => {
	if (result.config) {
		document.getElementById("maxTime").value = result.config.maxTime
		document.getElementById("transitionTime").value =
			result.config.transitionTime
		document.getElementById("enabled").checked = result.config.enabled
		document.getElementById("oneSegment").checked = result.config.oneSegment
	}
})
