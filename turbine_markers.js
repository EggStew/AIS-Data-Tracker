    // create the turbine popups
        const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF01'
        );
        const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF02'
        );
        const popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF03'
        );
        const popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF04'
        );
        const popup5 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF05'
        );
        const popup6 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF06'
        );
        const popup7 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF07'
        );
        const popup8 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF08'
        );
        const popup9 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF09'
        );
        const popup10 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF10'
        );
        const popup11 = new mapboxgl.Popup({ offset: 25 }).setText(
            'AWF11'
        );
    // Create a Marker for each Turbine, 11 Total.
        const marker1 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-2.012619, 57.223689])
        .setPopup(popup1) // sets a popup on this marker
        .addTo(map);

        const marker2 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-2.002188, 57.228391])
        .setPopup(popup2) // sets a popup on this marker
        .addTo(map);

        const marker3 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-1.989502, 57.233520])
        .setPopup(popup3) // sets a popup on this marker
        .addTo(map);

        const marker4 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-1.975843, 57.240101])
        .setPopup(popup4) // sets a popup on this marker
        .addTo(map);

        const marker5 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([ -2.011176,  57.215820])
        .setPopup(popup5) // sets a popup on this marker
        .addTo(map);

        const marker6 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-2.000215, 57.220070])
        .setPopup(popup6) // sets a popup on this marker
        .addTo(map);

        const marker7 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-1.987889, 57.224430])
        .setPopup(popup7) // sets a popup on this marker
        .addTo(map);

        const marker8 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-1.974161, 57.230164])
        .setPopup(popup8) // sets a popup on this marker
        .addTo(map);

        const marker9 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-2.010441, 57.207956])
        .setPopup(popup9) // sets a popup on this marker
        .addTo(map);

        const marker10 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-1.998675, 57.211752])
        .setPopup(popup10) // sets a popup on this marker
        .addTo(map);

        const marker11 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat([-1.985834, 57.216024])
        .setPopup(popup11) // sets a popup on this marker
        .addTo(map);