var data            =   [10,20,30,40,50];

d3.select('#chart')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    // .classed('bar', true)
    .attr('class', 'bar')
    .style('height', function(d) {
        var height = d * 3;
        return height + 'px'; // 10px
    });