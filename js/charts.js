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
            	chartContainer.find('.comments-list').append('<li>No comments</li>');
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
            	'Yes', 1
            ],[
            	'No', 4
            ]],
            'comments': [
            	'No han pensado en un servicio como este para la empresa.',
            	'No necesitamos express.'
            ]
        },{
        	//Pregunta 2
            'options': [[
            	'Yes', 4
            ],[
            	'No', 1
            ]],
            'comments': [
            	'No, poco presupuesto'
            ]
        },{
        	//Pregunta 3
            'options': [[
            	'Yes', 4
            ],[
            	'No', 1
            ]],
            'comments': []
        },{
        	//Pregunta 4
            'options': [[
            	'Yes', 3
            ],[
            	'No', 2
            ]],
            'comments': []
        },{
        	//Pregunta 5
            'options': [[
            	'Yes', 0
            ],[
            	'No', 5
            ]],
            'comments': []
        },{
        	//Pregunta 6
            'options': [[
            	'Yes', 4
            ],[
            	'No', 1
            ]],
            'comments': []
        },{
        	//Pregunta 7
            'options': [[
            	'Yes', 1
            ],[
            	'No', 4
            ]],
            'comments': []
        },{
        	//Pregunta 8
            'options': [[
            	'Yes', 4
            ],[
            	'No', 1
            ]],
            'comments': []
        },{
        	//Pregunta 9
            'options': [[
            	'Pago online', 5
            ],[
            	'Seguimiento del pedido', 5
            ],[
            	'Opiniones', 4
            ],[
            	'Estadísticas del servicio', 4
            ]],
            'comments': []
        },{
        	//Pregunta 10
            'options': [[
            	'Muy necesario', 7
            ],[
            	'Necesario', 6
            ],[
            	'Regular', 5
            ],[
            	'Poco necesario', 4
            ],[
            	'Innecesario', 3
            ]],
            'comments': []
        }];
    }
})();
