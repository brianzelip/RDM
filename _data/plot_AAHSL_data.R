# read in data
AAHSLdata <- read.csv("code_categories.csv", header = T)

# check to see the factor levels that R creates from data
AAHSLdata$Code
levels(AAHSLdata$Code)[1]

# reorder the factor levels to be displayed in the way that I want,
# which is Level 1, Level 2, Level 3, Level 0
AAHSLdata$Code <- factor(AAHSLdata$Code, levels = c("Education", "Consultation", "Infrastructure", "None found"))

# check to make sure the reorder happened as expected
print(levels(AAHSLdata$Code))
AAHSLdata$Code


# The main output now that I have reordered and rendered my plot
# in the way that I want it.

# set up the bar graph:
#  - X axis - each level
#  - Y axis - count of libraries per level
#  - print the count in text above each bar
#  - adjust X axis text so that the labels are readable on small viewports
AAHSLplot <- ggplot(AAHSLdata, aes(x=Code)) + geom_bar(fill="#0074d9") + stat_count(geom="text", size=6, colour="white", aes(label=..count.., vjust=1.5)) + labs(x = "Levels", y = "Libraries") + theme_bw(base_size = 16) + theme(axis.text.x=element_text(angle=45, hjust = 1))

# generate the plot
AAHSLplot

# output the plot to SVG in the `img` directory for web publishing
ggsave(file="../img/verticalOutput.svg", plot=AAHSLplot, width=5, height=5)




# REFERENCES

# outdated work on creating the horizontal display
# this is outdated because after I realized that I wanted to 
# diplay the data on the web in vertical fashion
# I discontinued working on this plot
horizontalPlot <- ggplot(AAHSLdata, aes(x=Code)) + geom_bar(fill="#0088cc") + stat_count(geom="text", size=6, colour="white", aes(label=..count.., hjust=1.5)) + labs(x = "Levels") + coord_flip() + theme_grey(base_size = 18)


# bibliography of support

# resources for getting my R plot working:
#   
#   - continuous vs categorical data
# https://eagereyes.org/basics/data-continuous-vs-categorical
# 
# - coloring bar graphs
# http://www.cookbook-r.com/Graphs/Colors_%28ggplot2%29/
#   
#   - Annotating bars with the value in text near the top of the bar
# [this one provided my solution] http://stackoverflow.com/questions/9815226/annotate-values-above-bars-ggplot-faceted
# 
# - reorder the "levels" of a data table (where "level" is the way R takes the data in the table and organizes it in terms of display, eg, the order in which R displays categories of variable values, or, the order in which R diplays bars in a bar chart -- R Speak is "REORDER FACTOR LEVELS")
# http://r.789695.n4.nabble.com/Order-Bars-in-ggplot2-bar-graph-td4704838.html
# [and the web search that FINALLY yeilded an answer I could use] https://duckduckgo.com/?q=ordered+bar+graph+ggplot2&t=ffab&ia=qa
# [this one pushed me toward the solution, but wasn't enough] http://www.r-bloggers.com/reorder-factor-levels-2/
# [this one was more helpful than the hour of searching the came before] https://rstudio-pubs-static.s3.amazonaws.com/7433_4537ea5073dc4162950abb715f513469.html
# [this one made it sound easy, but didn't make sense to me yet] https://trinkerrstuff.wordpress.com/2012/10/15/how-do-i-re-arrange-ordering-a-plot/
#   [and this one didn't do much for me at all although it usually topped the search results list during multiple unique-languaged searches] http://stackoverflow.com/questions/5208679/order-bars-in-ggplot2-bar-graph
#    [this was a useful step for understanding ggplot2] http://www.inside-r.org/packages/cran/ggplot2/docs/geom_bar
#    [i feel like this one should have given me more] https://kohske.wordpress.com/2010/12/29/faq-how-to-order-the-factor-variables-in-ggplot2/
#    
#    
#    - save ggplot2 plot as svg
#    http://stackoverflow.com/questions/12226822/how-to-save-a-plot-made-with-ggplot2-as-svg
#    http://www.ceb-institute.org/bbs/wp-content/uploads/2011/09/handout_ggplot2.pdf
#    
#    - ggplot2 font size adjustment
#    http://stackoverflow.com/questions/11955229/how-to-change-the-default-font-size-in-ggplot2
#    http://docs.ggplot2.org/0.9.2.1/geom_text.html
#    
#    