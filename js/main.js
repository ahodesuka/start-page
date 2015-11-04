var config =
{
    "sites":
    [
        { "url": "https://boards.4chan.org/jp/#catalog",                            "text": "/jp/" },
        { "url": "https://boards.4chan.org/a/#catalog",                             "text": "/a/"  },
        { "url": "https://boards.4chan.org/g/#catalog",                             "text": "/g/"  },
        { "url": "http://nibl.co.uk/bots.php",                                      "text": "XDCC" },
        { "url": "https://sceneaccess.eu",                                          "text": "SCC"  },
        { "url": "http://bakabt.me/",                                               "text": "BBT"  },
        { "url": "http://anidb.net/perl-bin/animedb.pl?show=mylist&do.filter=1",    "text": "ADB"  },
        { "url": "http://www.mangaupdates.com/mylist.html",                         "text": "MU"   },
        { "url": "http://vgmdb.net/",                                               "text": "VGM"  },
        { "url": "https://github.com/",                                             "text": "GH"   },
        { "url": "http://www.last.fm/home",                                         "text": "l.fm" },
        { "url": "http://what.cd/index.php",                                        "text": "W.CD" },
    ]
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12,
            site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            // d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                // d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }
});
