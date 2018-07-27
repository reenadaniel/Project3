//Initialize states list for selection*********************************

function getState() {

  var queryUrl = "/state";
  Plotly.d3.json(queryUrl, function(error, response) {
  
    var stateList = document.querySelector("#selDataset");
	  //alert(nameList);
	  
	for (i=0; i < response.length; i++) {
			console.log(response[i])
			var listItem = document.createElement("option");
			listItem.text = response[i];
			stateList.add(listItem);
	}
	  
	});
	initavggases();
	initavggasesbar();
	initavggasesscatter();

}
//call state funcction to initialize state list dropdown  
getState();

//**************************************************************************************************** */
function optionChanged(state) {
	//alert(state);
	// var queryUrl = "/country/"+sample_data;
	redrawavggases(state); 
	redrawavggasesbar(state); 
	redrawavggasesscatter(state); 
}  

//***************************************************************************************************** */
//Part I - Initialize charts for line chart AR*********************************
// Initialize Section for NO2
function initavggases() {

	var queryUrls2 = "/avgs2/AR";
	var BAR = document.getElementById("Linechart");

	Plotly.d3.json(queryUrls2, function(error, response) {
		console.log(response.avgs2)
		var trace4={
			x: response.year,
			y: response.avgs2,
			xaxis:'x4',
			yaxis:'y4',
			type: 'scatter'
		};

		var queryUrlo3 = "/avgo3/AR";
		var BAR = document.getElementById("Linechart");

		Plotly.d3.json(queryUrlo3, function(error, response) {
			console.log(response.avgo3)

			var trace3={
				x: response.year,
				y: response.avgo3,
				xaxis:'x3',
				yaxis:'y3',
				type: 'scatter'
			};

			var queryUrlno2 = "/avgno2/AR";
			var BAR = document.getElementById("Linechart");
	
				Plotly.d3.json(queryUrlno2, function(error, response) {
					console.log(response.avgno2)

					var trace1={
						x: response.year,
						y: response.avgno2,
						type: 'scatter'
					};

					var queryUrlco = "/avgco/AR";
					var BAR = document.getElementById("Linechart");

					Plotly.d3.json(queryUrlco, function(error, response) {
						console.log(response.avgco)	
						var trace2={
							x: response.year,
							y: response.avgco,
							xaxis:'x2',
							yaxis:'y2',
							type: 'scatter'
						
						};
						  

						var data = [trace1, trace2, trace3, trace4];

						var layout = {
							title: "Average Pollution - 2000 thru 2010",
							xaxis: {
								title:"Year",
								domain: [0, 0.45]},
							yaxis: {
								title:"Average NO2",
								domain: [0, 0.45]},
							xaxis4: {
								title:"Year",
							  domain: [0.55, 1],
							  anchor: 'y4'
							},
							xaxis3: {
								title:"Year",
							  domain: [0, 0.45],
							  anchor: 'y3'
							},
							xaxis2: {
								title:"Year",
								domain: [0.55, 1]},
							yaxis2: {
								title:"Average CO",
							  domain: [0, 0.45],
							  anchor: 'x2'
							},
							yaxis3: {
								title:"Average O3",
								domain: [0.55, 1]},
							yaxis4: {
								title:"Average S2",
							  domain: [0.55, 1],
							  anchor: 'x4'
							}
						  };
						  						  
						Plotly.newPlot("Linechart", data, layout);
					
					});	
				});
		});
	});
}
//end init gases for line chart
//***************************************************************************************************** */
//start init gases for bar chart
//***************************************************************************************************** */
function initavggasesbar() {

	var queryUrls2 = "/avgs2/AR";
	var BAR = document.getElementById("Barchart");

	Plotly.d3.json(queryUrls2, function(error, response) {
		console.log(response.avgs2)
		var trace4={
			x: response.year,
			y: response.avgs2,
			xaxis:'x4',
			yaxis:'y4',
			type: 'bar'
		};

		var queryUrlo3 = "/avgo3/AR";
		var BAR = document.getElementById("Barchart");

		Plotly.d3.json(queryUrlo3, function(error, response) {
			console.log(response.avgo3)

			var trace3={
				x: response.year,
				y: response.avgo3,
				xaxis:'x3',
				yaxis:'y3',
				type: 'bar'
			};

			var queryUrlno2 = "/avgno2/AR";
			var BAR = document.getElementById("Barchart");
	
				Plotly.d3.json(queryUrlno2, function(error, response) {
					console.log(response.avgno2)

					var trace1={
						x: response.year,
						y: response.avgno2,
						type: 'bar'
					};

					var queryUrlco = "/avgco/AR";
					var BAR = document.getElementById("Barchart");

					Plotly.d3.json(queryUrlco, function(error, response) {
						console.log(response.avgco)	
						var trace2={
							x: response.year,
							y: response.avgco,
							xaxis:'x2',
							yaxis:'y2',
							type: 'bar'
						
						};
						  

						var data = [trace1, trace2, trace3, trace4];

						var layout = {
							title: "Average Pollution - 2000 thru 2010",
							xaxis: {
								title:"Year",
								domain: [0, 0.45]},
							yaxis: {
								title:"Average NO2",
								domain: [0, 0.45]},
							xaxis4: {
								title:"Year",
							  domain: [0.55, 1],
							  anchor: 'y4'
							},
							xaxis3: {
								title:"Year",
							  domain: [0, 0.45],
							  anchor: 'y3'
							},
							xaxis2: {
								title:"Year",
								domain: [0.55, 1]},
							yaxis2: {
								title:"Average CO",
							  domain: [0, 0.45],
							  anchor: 'x2'
							},
							yaxis3: {
								title:"Average O3",
								domain: [0.55, 1]},
							yaxis4: {
								title:"Average S2",
							  domain: [0.55, 1],
							  anchor: 'x4'
							}
						  };
						  						  
						Plotly.newPlot("Barchart", data, layout);
					
					});	
				});
		});
	});
}
//***************************************************************************************************** */
//end init gases for bar chart

//start init gases for scatter chart
//***************************************************************************************************** */
function initavggasesscatter() {

	var queryUrls2 = "/avgs2/AR";
	var BAR = document.getElementById("Scatterchart");

	Plotly.d3.json(queryUrls2, function(error, response) {
		console.log(response.avgs2)
		var trace4={
			x: response.year,
			y: response.avgs2,
			xaxis:'x4',
			yaxis:'y4',
			type: 'scatter',
			mode: "markers",
			marker: {
				color: response.year,
				size: response.avgs2,
				sizemode: 'area' 
			}
		};

		var queryUrlo3 = "/avgo3/AR";
		var BAR = document.getElementById("Scatterchart");

		Plotly.d3.json(queryUrlo3, function(error, response) {
			console.log(response.avgo3)

			var trace3={
				x: response.year,
				y: response.avgo3,
				xaxis:'x3',
				yaxis:'y3',
				type: 'scatter',
				mode: "markers",
				marker: {
					color: response.year,
					size: response.avgo3,
					sizemode: 'area' 
				}
			};

			var queryUrlno2 = "/avgno2/AR";
			var BAR = document.getElementById("Scatterchart");
	
				Plotly.d3.json(queryUrlno2, function(error, response) {
					console.log(response.avgno2)

					var trace1={
						x: response.year,
						y: response.avgno2,
						type: 'scatter',
						mode: "markers",
						marker: {
							color: response.year,
							size: response.avgno2,
							sizemode: 'area' 
						}
					};

					var queryUrlco = "/avgco/AR";
					var BAR = document.getElementById("Scatterchart");

					Plotly.d3.json(queryUrlco, function(error, response) {
						console.log(response.avgco)	
						var trace2={
							x: response.year,
							y: response.avgco,
							xaxis:'x2',
							yaxis:'y2',
							type: 'scatter',
							mode: "markers",
						marker: {
							color: response.year,
							size: response.avgco,
							sizemode: 'area' 
						}
						
						};
						  

						var data = [trace1, trace2, trace3, trace4];

						var layout = {
							title: "Average Pollution - 2000 thru 2010",
							xaxis: {
								title:"Year",
								domain: [0, 0.45]},
							yaxis: {
								title:"Average NO2",
								domain: [0, 0.45]},
							xaxis4: {
								title:"Year",
							  domain: [0.55, 1],
							  anchor: 'y4'
							},
							xaxis3: {
								title:"Year",
							  domain: [0, 0.45],
							  anchor: 'y3'
							},
							xaxis2: {
								title:"Year",
								domain: [0.55, 1]},
							yaxis2: {
								title:"Average CO",
							  domain: [0, 0.45],
							  anchor: 'x2'
							},
							yaxis3: {
								title:"Average O3",
								domain: [0.55, 1]},
							yaxis4: {
								title:"Average S2",
							  domain: [0.55, 1],
							  anchor: 'x4'
							}
						  };
						  						  
						Plotly.newPlot("Scatterchart", data, layout);
					
					});	
				});
		});
	});
}
//***************************************************************************************************** */
//end init gases for scatter chart

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Part II - Option Changing Code*********************************
//Redraw - or selected state for line chart

function redrawavggases(state) {
	
//	var queryUrl = "/avgno2/"+state;
	var queryUrls2 = "/avgs2/"+state;
	var BAR = document.getElementById("Linechart");

	Plotly.d3.json(queryUrls2, function(error, response) {
		console.log(response.avgs2)
		var trace4={
			x: response.year,
			y: response.avgs2,
			xaxis:'x4',
			yaxis:'y4',
			type: 'scatter'
		};

		var queryUrlo3 = "/avgo3/"+state;
		var BAR = document.getElementById("Linechart");

		Plotly.d3.json(queryUrlo3, function(error, response) {
			console.log(response.avgo3)

			var trace3={
				x: response.year,
				y: response.avgo3,
				xaxis:'x3',
				yaxis:'y3',
				type: 'scatter'
			};

			var queryUrlno2 = "/avgno2/"+state;
			var BAR = document.getElementById("Linechart");
	
				Plotly.d3.json(queryUrlno2, function(error, response) {
					console.log(response.avgno2)

					var trace1={
						x: response.year,
						y: response.avgno2,
						type: 'scatter'
					};

					var queryUrlco = "/avgco/"+state;
					var BAR = document.getElementById("Linechart");

					Plotly.d3.json(queryUrlco, function(error, response) {
						console.log(response.avgco)	
						var trace2={
							x: response.year,
							y: response.avgco,
							xaxis:'x2',
							yaxis:'y2',
							type: 'scatter'
						
						};
						  
						var data = [trace1, trace2, trace3, trace4];

						var layout = {
							title: "Average Pollution - 2000 thru 2010",
							xaxis: {
								title:"Year",
								domain: [0, 0.45]},
							yaxis: {
								title:"Average NO2",
								domain: [0, 0.45]},
							xaxis4: {
								title:"Year",
							  domain: [0.55, 1],
							  anchor: 'y4'
							},
							xaxis3: {
								title:"Year",
							  domain: [0, 0.45],
							  anchor: 'y3'
							},
							xaxis2: {
								title:"Year",
								domain: [0.55, 1]},
							yaxis2: {
								title:"Average CO",
							  domain: [0, 0.45],
							  anchor: 'x2'
							},
							yaxis3: {
								title:"Average O3",
								domain: [0.55, 1]},
							yaxis4: {
								title:"Average S2",
							  domain: [0.55, 1],
							  anchor: 'x4'
							}
						  };
						  						  
						Plotly.newPlot("Linechart", data, layout);
					
					});	
				});
		});
	});
}
//End Redraw - or selected state for line chart
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Start Redraw for selected state for bar chart

function redrawavggasesbar(state) {
	
	//	var queryUrl = "/avgno2/"+state;
		var queryUrls2 = "/avgs2/"+state;
		var BAR = document.getElementById("Barchart");
	
		Plotly.d3.json(queryUrls2, function(error, response) {
			console.log(response.avgs2)
			var trace4={
				x: response.year,
				y: response.avgs2,
				xaxis:'x4',
				yaxis:'y4',
				type: 'bar'
			};
	
			var queryUrlo3 = "/avgo3/"+state;
			var BAR = document.getElementById("Barchart");
	
			Plotly.d3.json(queryUrlo3, function(error, response) {
				console.log(response.avgo3)
	
				var trace3={
					x: response.year,
					y: response.avgo3,
					xaxis:'x3',
					yaxis:'y3',
					type: 'bar'
				};
	
				var queryUrlno2 = "/avgno2/"+state;
				var BAR = document.getElementById("Barchart");
		
					Plotly.d3.json(queryUrlno2, function(error, response) {
						console.log(response.avgno2)
	
						var trace1={
							x: response.year,
							y: response.avgno2,
							type: 'bar'
						};
	
						var queryUrlco = "/avgco/"+state;
						var BAR = document.getElementById("Barchart");
	
						Plotly.d3.json(queryUrlco, function(error, response) {
							console.log(response.avgco)	
							var trace2={
								x: response.year,
								y: response.avgco,
								xaxis:'x2',
								yaxis:'y2',
								type: 'bar'
							
							};
							  
							var data = [trace1, trace2, trace3, trace4];
	
							var layout = {
								title: "Average Pollution - 2000 thru 2010",
								xaxis: {
									title:"Year",
									domain: [0, 0.45]},
								yaxis: {
									title:"Average NO2",
									domain: [0, 0.45]},
								xaxis4: {
									title:"Year",
								  domain: [0.55, 1],
								  anchor: 'y4'
								},
								xaxis3: {
									title:"Year",
								  domain: [0, 0.45],
								  anchor: 'y3'
								},
								xaxis2: {
									title:"Year",
									domain: [0.55, 1]},
								yaxis2: {
									title:"Average CO",
								  domain: [0, 0.45],
								  anchor: 'x2'
								},
								yaxis3: {
									title:"Average O3",
									domain: [0.55, 1]},
								yaxis4: {
									title:"Average S2",
								  domain: [0.55, 1],
								  anchor: 'x4'
								}
							  };
														
							Plotly.newPlot("Barchart", data, layout);
						
						});	
					});
			});
		});
	}

// End Redraw for selected gases for bar chart
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Start Redraw for selected state for scatter chart

function redrawavggasesscatter(state) {
	
	//	var queryUrl = "/avgno2/"+state;
		var queryUrls2 = "/avgs2/"+state;
		var BAR = document.getElementById("Scatterchart");
	
		Plotly.d3.json(queryUrls2, function(error, response) {
			console.log(response.avgs2)
			var trace4={
				x: response.year,
				y: response.avgs2,
				xaxis:'x4',
				yaxis:'y4',
				type: 'scatter',
				mode: "markers",
				marker: {
					color: response.year,
					size: response.avgs2,
					sizemode: 'area' 
				}
			};
	
			var queryUrlo3 = "/avgo3/"+state;
			var BAR = document.getElementById("Scatterchart");
	
			Plotly.d3.json(queryUrlo3, function(error, response) {
				console.log(response.avgo3)
	
				var trace3={
					x: response.year,
					y: response.avgo3,
					xaxis:'x3',
					yaxis:'y3',
					type: 'scatter',
					mode: "markers",
					marker: {
						color: response.year,
						size: response.avgo3,
						sizemode: 'area' 
					}
				};
	
				var queryUrlno2 = "/avgno2/"+state;
				var BAR = document.getElementById("Scatterchart");
		
					Plotly.d3.json(queryUrlno2, function(error, response) {
						console.log(response.avgno2)
	
						var trace1={
							x: response.year,
							y: response.avgno2,
							type: 'scatter',
							mode: "markers",
							marker: {
								color: response.year,
								size: response.avgno2,
								sizemode: 'area' 
							}
						};
	
						var queryUrlco = "/avgco/"+state;
						var BAR = document.getElementById("Scatterchart");
	
						Plotly.d3.json(queryUrlco, function(error, response) {
							console.log(response.avgco)	
							var trace2={
								x: response.year,
								y: response.avgco,
								xaxis:'x2',
								yaxis:'y2',
								type: 'scatter',
								mode: "markers",
								marker: {
									color: response.year,
									size: response.avgco,
									sizemode: 'area' 
								}
							
							};
							  
							var data = [trace1, trace2, trace3, trace4];
	
							var layout = {
								title: "Average Pollution - 2000 thru 2010",
								xaxis: {
									title:"Year",
									domain: [0, 0.45]},
								yaxis: {
									title:"Average NO2",
									domain: [0, 0.45]},
								xaxis4: {
									title:"Year",
								  domain: [0.55, 1],
								  anchor: 'y4'
								},
								xaxis3: {
									title:"Year",
								  domain: [0, 0.45],
								  anchor: 'y3'
								},
								xaxis2: {
									title:"Year",
									domain: [0.55, 1]},
								yaxis2: {
									title:"Average CO",
								  domain: [0, 0.45],
								  anchor: 'x2'
								},
								yaxis3: {
									title:"Average O3",
									domain: [0.55, 1]},
								yaxis4: {
									title:"Average S2",
								  domain: [0.55, 1],
								  anchor: 'x4'
								}
							  };
														
							Plotly.newPlot("Scatterchart", data, layout);
						
						});	
					});
			});
		});
	}

// End Redraw for selected gases for scatter chart
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

