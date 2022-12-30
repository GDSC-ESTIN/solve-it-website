mylist = ["NavBar", "Header", "Timer", "About",
          "TimeLine", "Mentors", "Workshops", "Sponsors"]


# create files in the current directory with the names in the list + ".jsx"

for i in mylist:
    with open(i + ".jsx", "w") as f:
        f.write("import React from 'react';\r\r function " + i +
                "() {\r\treturn (\r\t\t<div className='" + i + "'>\r\t\t\t" + i + "\r\t\t</div>\r\t);\r}\r\rexport default " + i + ";")


# # after creating the files i want to import them in the App.js file (files are in component folder)

# with open("App.js", "a") as f:
#     f.write("\r\r// import components\r")
#     for i in mylist:
#         f.write("import " + i + " from './components/" + i + "';\r")
