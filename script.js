<script>
    function calculateCompatibility() {
        // Get input values
        const name1 = document.getElementById('name1').value || "Partner 1";
        const name2 = document.getElementById('name2').value || "Partner 2";
        const zodiac1 = document.getElementById('zodiac1').value || "unknown sign";
        const zodiac2 = document.getElementById('zodiac2').value || "unknown sign";
        
        // Always show high compatibility (rigged)
        const compatibility = 95 + Math.floor(Math.random() * 5); // Always between 95-99%
        
        // Display results - HARDCODED NAMES (changed this line)
        document.getElementById('names-result').textContent = 
            `Carter ♥ Lindley`;  // This will always show these names
        
        document.getElementById('score').textContent = `${compatibility}%`;
        document.getElementById('progress-bar').style.width = `${compatibility}%`;
        
        // Generate positive message (always)
        const messages = [
            "This is an extraordinary match! The stars align perfectly for you two!",
            "Incredible chemistry! You're clearly meant to be together!",
            "A match made in heaven! Your connection is truly special!",
            "Perfect harmony! Your relationship is destined for greatness!",
            "Soulmates alert! Your bond is unbreakable!"
        ];
        document.getElementById('message').textContent = 
            messages[Math.floor(Math.random() * messages.length)];
        
        // Generate positive zodiac message (always)
        const zodiacMessages = [
            `The combination of ${zodiac1} and ${zodiac2} creates magical energy!`,
            `${zodiac1} and ${zodiac2} together? A power couple in the making!`,
            `Astrologers agree: ${zodiac1} + ${zodiac2} = perfect match!`,
            `Your ${zodiac1}-${zodiac2} pairing is exceptionally rare and beautiful!`,
            `The stars confirm: ${zodiac1} and ${zodiac2} have cosmic compatibility!`
        ];
        document.getElementById('zodiac-compatibility').textContent = 
            zodiacMessages[Math.floor(Math.random() * zodiacMessages.length)];
        
        // Show results
        document.getElementById('result').style.display = 'block';
        
        // Scroll to results
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }
</script>
