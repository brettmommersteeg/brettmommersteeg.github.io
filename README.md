# Add Posts
To add posts to Bits & Pieces create a markdown file to the directory _posts.
The file should have the name format `YYYY-MM-DD-title of page.md` 

Use the markdown cheat sheet below for formatting. At the top of the post include the following header.
```
---
title: 'Sounds of Science?'
date: 2021-07-30
permalink: /bits-and-pieces/sounds-of-science/
tags:
  - sounds
---
```
Tags will be listed at the bottom of the post and combined together.  
The permalink needs to include the first bit to be added to the list `/bits-and-pieces/`

*Add Post*
To add posts add files to the _posts directory on github.  
![Create post](https://brettmommersteeg.github.io/images/github-add-file.png "Create post")

Add the filename at the top and save (commit) the new post at the bottom.  
![Commit post](https://brettmommersteeg.github.io/images/github-add-file-2.png "Commit post")

*Edit Post*
Posts can be modified on github by clicking the pencil on post.  
![Edit post](https://brettmommersteeg.github.io/images/github-edit-file.png "Edit post")

After editing the post need to commit to github in order for it to be update on the website.  
![Save edit post](https://brettmommersteeg.github.io/images/github-edit-file-2.png "Save edit post")

## Add Images
Images can be added to posts. They first need to be uploaded to the images directory.
The name of the files should not have any spaces, use - or _ for spaces.  
`![alt text](https://brettmommersteeg.github.io/images/github-add-file.png "Logo Title Text 1")`

## Add Files
Files can be added to posts. They first need to uploaded to files directory.
The name of the files should not have any spaces, use - or _ for spaces. 
The file can be included as a link in a post.  
`[Upload File](https://brettmommersteeg.github.io/files/MOMMERSTEEG_CV.pdf)`  
[Upload File](https://brettmommersteeg.github.io/files/MOMMERSTEEG_CV.pdf)
# Update Page Content
Page content can be update like posts on github. Pages are all stored in the _page directory.

# Markdown Cheat Sheet
## Headers
```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
### Examples
# H1
## H2
### H3
#### H4
##### H5
###### H6

<br>

## Emphasis
```
Italics - *asterisks* or _underscores_
Bold - **asterisks** or __underscores__
Combined - **asterisks and _underscore_**
Strikethrough - ~scratch that~
```
### Example
*Italics*\
**Bold**\
**Combined _style_**\
~Strikethrough~
## Lists
```
1. Order list
2. Second Item
  * Unordered sub-list

1. Another list
  Can have a sub paragraph under a list
```
### Example
1. List item one 
    1. List item one 
        1. List item one
2. Second Item
    * Unordered sub-list
        * Sub-list

1. Another list  
  Can have a sub paragraph under a list, need to add two trailing spaces to do soft  
  line breaks (or '\')

<br>

## Line Breaks
```
Soft line break - \ or two trailing spaces
Another method break - <br>
To have empty line need to have two spaces
```
### Example
Soft line break\
Soft line
<br>
Line break

Space between lines

## Links
```
[I'm an inline-style link](https://www.google.com)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
```
### Example
[I'm an inline-style link](https://www.google.com)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

## Images
```
![alt text](https://brettmommersteeg.github.io/images/site-logo.png "Logo Title Text 1")

```
### Example
![alt text](https://brettmommersteeg.github.io/images/site-logo.png "Logo Title Text 1")

## Code
```
\```javascript
var s = "JavaScript syntax highlighting";
alert(s);
\```
 
\```python
s = "Python syntax highlighting"
print s
\```
 
\```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
\```

Inline `code` has `back-ticks around` it.


```
## Example
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

Inline `code` has `back-ticks around` it.

## Tables
```

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |
```
### Example
| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

## Blockquotes
```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
```
### Example
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

## Horizontal Rule
```
Three or more...

Hyphens
---
Asterisks
***
Underscores
___
```
### Example
Three or more...

Hyphens
---

Asterisks
***

Underscores
___

## Sub and Super Script
```
H<sub>2</sub>O
E = MC<sup>2</sup>
```
### Example
H<sub>2</sub>O
E = MC<sup>2</sup>



# To Do
* Add SEO to config file
* Look into ways to improve SEO
* Clean up unused _layouts, _includes, _config.yml settings
