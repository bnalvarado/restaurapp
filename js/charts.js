(function() {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawCharts);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawCharts() {
        var data = getData();
        for (var i = 0; i < data.length; i++) {
        	// Get card associated to chart id
            var chartContainer = $('#chart_' + (i+1));
            // Create the data table.
            var chartData = new google.visualization.DataTable();
            chartData.addColumn('string', 'Topping');
            chartData.addColumn('number', 'Slices');
            chartData.addRows(data[i].options);
            
            var comments = data[i].comments;
            if (comments.length > 0) {
            	for (var j = 0; j < comments.length; j++) {
            		var comment = '<li>'+comments[j]+'</li>';
            		chartContainer.find('.comments-list').append(comment);
            	}
            }else{
            	chartContainer.find('.comments-list').append('<li>0 comentarios</li>');
            }

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(chartContainer.find('div.chart')[0]);
            chart.draw(chartData);
        }
    }

    //Get data to generate graphics
    function getData() {
        return [{
        	//Pregunta1
            'options': [[
            	'Yes', 6
            ],[
            	'No', 24
            ]],
            'comments': [
            	'No han pensado en un servicio como este para la empresa.',
            	'No necesitamos express.'
            ]
        },{
        	//Pregunta 2
            'options': [[
            	'Yes', 25
            ],[
            	'No', 5
            ]],
            'comments': [
            	'No, poco presupuesto'
            ]
        },{
        	//Pregunta 3
            'options': [[
            	'Yes', 23
            ],[
            	'No', 7
            ]],
            'comments': []
        },{
        	//Pregunta 4
            'options': [[
            	'Yes', 18
            ],[
            	'No', 12
            ]],
            'comments': []
        },{
        	//Pregunta 5
            'options': [[
            	'Yes', 0
            ],[
            	'No', 30
            ]],
            'comments': []
        },{
        	//Pregunta 6
            'options': [[
            	'Yes', 26
            ],[
            	'No', 4
            ]],
            'comments': []
        },{
        	//Pregunta 7
            'options': [[
            	'Yes', 5
            ],[
            	'No', 25
            ]],
            'comments': []
        },{
        	//Pregunta 8
            'options': [[
            	'Yes', 27
            ],[
            	'No', 3
            ]],
            'comments': []
        },{
        	//Pregunta 9
            'options': [[
            	'Pago online', 9
            ],[
            	'Seguimiento del pedido', 11
            ],[
            	'Opiniones', 5
            ],[
            	'Estadísticas del servicio', 5
            ]],
            'comments': []
        },{
        	//Pregunta 10
            'options': [[
            	'Muy necesario', 8
            ],[
            	'Necesario', 7
            ],[
            	'Regular', 6
            ],[
            	'Poco necesario', 5
            ],[
            	'Innecesario', 4
            ]],
            'comments': []
        }];
    }
})();
