var tour = {
      id: "hello-hm9k-2",
      nextOnTargetClick: true,
      steps: [
        {
          title: "<i>hm9k: it's pentesting, but better</i>",
          content: "Welcome to hackmaster9000 (hm9k) for short.<br/>" +
          "<br/>"+
          "hm9k is a platform to help use terminal tools and the data that comes from them."
          + "</br></br> This tour will walk you through the basics",
          target: $(".start-tour-button")[0],
          placement: "right"
        },
        {
          title: "What first?",
          content: "You need some data! Where does data come from? Tools! We are on the tools page, so Let's do an example nmap scan to get some host data.",
          target: $("a[href='#tab-nmap']").last()[0],
          placement: "top",
          onNext: function() {
            $('.nav-pills a[href="#tools"]').tab('show');
            $('.nav-tabs a[href="#tab-nmap"]').tab('show');
          },
          nextOnTargetClick: true 
        },
        {
          title: "Nmap",
          content: "You probably already know the basics of nmap, but if not, check out the help document. These are at the top of each tool and can give useful information.",
          target: $("#nmap-help-heading").last()[0],
          placement: "right"
        },
        {
          title: "Terminal",
          content: "Go ahead and open a terminal for the nmap command to run in by pressing the [new terminal] button below.",
          target: $(".new-terminal-button").last()[0],
          placement: "top",
          nextOnTargetClick: true,
          showNextButton: false
        },
	      {
          title: "Terminal?!",
          content: "Yes, this is a real PTY terminal running on the server. By default, it will open to the working directory of the project where all of the scan files are held and parsed. You are not limited to the project directory; this is a real terminal, explore!",
          target: $(".new-terminal-button").last()[0],
          placement: "top"
        },
        {
          title: "Nmap Scan",
          content: "Type in an IP or domain to scan; your personal website? localhost? It's just an nmap scan, pick something!",
          target: $("#nmap-target")[0],
          placement: "right"
        },
        {
          title: "Terminal Selection",
          content: "Please select the terminal that your command should execute in by clicking the empty space next to the tab. Your selected pane will be highlighted orange. Sometimes, you might have multiple panes, keep your most relevant one selected!",
          target: $(".lm_header.lm_selectable").first()[0],
          placement: "top"
        },
        {
          title: "Nmap Scan",
          content: "Then hit run! Your command will be built based on the input above and sent straight to work in the terminal. If you don't have a terminal open, hitting run once will open a new terminal, then pressing it again will send the comand",
          target: $("#nmap-run")[0],
          placement: "top"
        },
        {
          title: "Hosts",
          content: "If all went well, nmap should have generated some data about your target. hm9k is continually monitoring for new scan data generated by the tools which will be loaded soon after the tool is finished. Let's check out the host tab!",
          target: $("a[href='#hosts']")[0],
          placement: "right",
          onNext: function() {
            $('.nav-pills a[href="#hosts"]').tab('show');
          },
          nextOnTargetClick: true 
          
	      },
	      {
          title: "Overview",
          content: "The host overview is a master list of every host (ip address) that one of your scans or tools has output. It is listed in newest-first order. Combing through scan data doesn't have to suck! Use the details button to drill down and investigate / annotate a host more closely. This strategy applies to the Domain and Web Application tabs as well.",
          target: $("a[href='#hosts']")[0],
					placement: "right",
          nextOnTargetClick: true 

	      },
	      {
          title: "Selecting and sending",
          content: "Data from tables can be selected either by dragging the narrow white strip on the left side across multiple elements, or by clicking 'Select All' here. Note: Only the items currently visible in the table will be selected. If you want to select specific targets at a larger scale, use the search box to filter and then use 'Select All'", 
          target: $("#host-table_wrapper").find(".dt-buttons").first()[0],
          placement: "bottom",
          nextOnTargetClick: true 
	      },
        {
          title: "Selecting and Sending",
          content: "Use the 'Send to' dropdown to send all selected targets to the chosen tool!", 
          target: $("#host-table_wrapper").find(".dt-buttons").first()[0],
          placement: "bottom",
          nextOnTargetClick: true 
	},
	{
          title: "GL;HF",
          content: "As you use more tools and gather more data, the picture of your target will become more clear and the UI will live-update with any (supported) tool data generated. The rest is up to you!", 
          target: $("#host-table_wrapper").find(".dt-buttons").first()[0],
          placement: "bottom",
          nextOnTargetClick: true 
	     }
      ]
    };

// Start the tour!
hopscotch.startTour(tour);
