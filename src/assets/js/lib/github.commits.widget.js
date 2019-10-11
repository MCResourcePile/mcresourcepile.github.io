/*

https://github.com/alexanderbeletsky/github-commits-widget

# Legal Info (MIT License)

Copyright (c) 2012 Alexander Beletsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function($) {
    function widget(element, options, callback) {
        this.element = element;
        this.options = options;
        this.callback = $.isFunction(callback) ? callback : $.noop;
    }

    widget.prototype = (function() {

        function getCommits(user, repo, branch, callback) {
            $.ajax({
                url: "https://api.github.com/repos/" + user + "/" + repo + "/commits?sha=" + branch,
                dataType: 'jsonp',
                success: callback
            });
        }

        function _widgetRun(widget) {
            if (!widget.options) {
                widget.element.append('<span class="error">An error occured while loading commits...</span>');
                return;
            }
            var callback = widget.callback;
            var element = widget.element;
            var user = widget.options.user;
            var repo = widget.options.repo;
            var branch = widget.options.branch;
            var avatarSize = widget.options.avatarSize || 20;
            var last = widget.options.last === undefined ? 0 : widget.options.last;
            var limitMessage = widget.options.limitMessageTo === undefined ? 0 : widget.options.limitMessageTo;

            getCommits(user, repo, branch, function(data) {
                var commits = data.data;
                var totalCommits = (last < commits.length ? last : commits.length);

                element.empty();

                var list = $('<table class="table" style="color: #2f2f2f; font-size: 13px;"><tr class="active" style="color: #202020;"><th width="6%">SHA</th><th width="10%">Author</th><th width="70%">Description</th><th width="14%">When</th></tr>').appendTo(element);
                for (var c = 0; c < totalCommits; c++) {
                    var cur = commits[c];
                    var li = $("<tr>");

                    var e_user = $('<td>');
                    var sha_td = $('<td>');
                    sha_td.append(message_sha(cur.sha));
                    //add avatar & github link if possible
                    if (cur.author !== null) {
                        e_user.append(author(cur.author.login));
                    } else //otherwise just list the name
                    {
                        e_user.append(cur.commit.committer.name);
                    }

                    li.append(sha_td);
                    li.append(e_user);

                    //add commit message
                    li.append(message(cur.commit.message, cur.sha));
                    li.append(when(cur.commit.committer.date));

                    list.append(li);
                }


                callback(element);

                function author(login) {
                    return $('<a>')
                        .attr("id", 'commitAuthor')
                        .attr("href", 'https://github.com/' + login)
                        .attr("target", '_blank')
                        .text(login);
                }

                function message(commitMessage, sha) {
                    if (limitMessage > 0 && commitMessage.length > limitMessage) {
                        commitMessage = commitMessage.substr(0, limitMessage) + '...';
                    }
                    
                    //split commit message into summary and description if has extended message
                    if (commitMessage.includes("\n\n")) {
                        var commitSummary = commitMessage.substring(0, commitMessage.indexOf('\n\n'));
                        var commitDescription = commitMessage.substring(commitMessage.indexOf('\n\n') + 1);
                        commitDescription = commitDescription.replace(/(\r\n|\n|\r)/gm," ");
                        
                        var link = $('<td>')
                            .html(commitSummary + '<br><small style="color:#6a6a6a;padding-left:5px;padding-top:2px;padding-bottom:2px;border-left:1px solid #989898;display:inline-block">' + commitDescription + '</small>');
                    } else {
                        var commitSummary = commitMessage;
                        var commitDescription = null;
                        
                        var link = $('<td>')
                            .html(commitSummary);
                    }

                    return link;
                }

                function message_sha(sha) {
                    var originalShaMessage = sha;
                    sha_short = sha.substring(0, 7);

                    var link_sha
                        return $('<a>')
                            .attr("href", 'https://github.com/' + user + '/' + repo + '/commit/' + originalShaMessage)
                            .attr("target", "_blank")
                            .text(sha_short);

                    return link_sha;
                }

                function when(commitDate) {
                    var commitTime = new Date(commitDate).getTime();
                    var todayTime = new Date().getTime();

                    var differenceInDays = Math.floor(((todayTime - commitTime) / (24 * 3600 * 1000)));
                    if (differenceInDays === 0) {
                        var differenceInHours = Math.floor(((todayTime - commitTime) / (3600 * 1000)));
                        if (differenceInHours === 0) {
                            var differenceInMinutes = Math.floor(((todayTime - commitTime) / (60 * 1000)));
                            if (differenceInMinutes === 0) {

                                return '<td>just now</td>';
                            } else if (differenceInMinutes == 1) {
                                return '<td>1 minute ago</td>';
                            }

                            return '<td>' + differenceInMinutes + ' minutes ago</td>';
                        } else if (differenceInHours == 1) {
                            return '<td>1 hour ago</td>';
                        }

                        return '<td>' + differenceInHours + ' hours ago</td>';
                    } else if (differenceInDays == 1) {
                        return '<td>yesterday</td>';
                    }
                    if (differenceInDays > 60) {
                        return '<td>' + Math.floor( differenceInDays / 30)  + ' months ago</td>';
                    }
                    if (differenceInDays > 730) {
                        return '<td>' + Math.floor( differenceInDays / 365)  + ' years ago</td>';
                    }
                    return '<td>' + differenceInDays + ' days ago</td>';
                }
            });
        }

        return {
            run: function() {
                _widgetRun(this);
            }
        };

    })();

    $.fn.githubInfoWidget = function(options, callback) {
        this.each(function() {
            new widget($(this), options, callback)
                .run();
        });
        return this;
    };

    $(document).ready(function() {
        $(".commitsFade").delay(750).fadeIn(500);
    });

})(jQuery);
