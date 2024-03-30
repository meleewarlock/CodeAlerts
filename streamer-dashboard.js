document.addEventListener('DOMContentLoaded', () => {
    // Listen for form submission
    const alertConfigForm = document.getElementById('alertConfigForm');
    if (alertConfigForm) {
        alertConfigForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Collect form data
            const formData = new FormData(event.target);
            const configData = {
                color: formData.get('alertColor'),
                size: formData.get('alertSize') + 'px', // Assuming size input is in pixels
                font: formData.get('alertFont'),
                fadeInDuration: parseInt(formData.get('fadeInDuration'), 10),
                fadeOutDuration: parseInt(formData.get('fadeOutDuration'), 10),
                displayDuration: parseInt(formData.get('displayDuration'), 10),
            };

            // Send configuration data to server using 'fetch' with FormData
            await fetch('/upload-alert-config', { // Endpoint adjusted for file uploads
                method: 'POST',
                body: formData, // FormData is directly used here
                // Note: Do not set Content-Type header; FormData takes care of it
            }).then(response => {
                if (response.ok) {
                    console.log('Configuration updated successfully.');
                } else {
                    console.error('Failed to update configuration.');
                }
            }).catch(error => {
                console.error('Error updating configuration:', error);
            });
        });
    }

    // Handle test alert button click
    document.getElementById('testAlert').addEventListener('click', async () => {
        const testAlertData = {
            type: 'test-alert',
            data: {
                donorName: "Test Donor",
                donationMessage: "This is a test donation alert!"
            }
        };

        // Send test alert data to server
        await fetch('/send-test-alert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testAlertData),
        }).then(response => {
            if (response.ok) {
                console.log('Test alert sent successfully.');
            } else {
                console.error('Failed to send test alert.');
            }
        }).catch(error => {
            console.error('Error sending test alert:', error);
        });
    });
});