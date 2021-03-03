var docjs_searchitems = [];
  window.onload = function() {
      var htmlmode, page_title, page_content, NEXT_PAGE, PREV_PAGE, HTML_PAGE_NEXT, HTML_PAGE_PREV, data, FILENAME, defPage;
      document.title = docjs.title;
      if (docjs.HTMLmode == true) {
          htmlmode = 'html';
      } else {
          htmlmode = 'md';
      }
      if (docjs.lightTheme == true) {
          document.body.setAttribute('data-lightTheme', 'true')
      }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById(docjs.element).innerHTML =
                  "<div id=\"DOCJS_LOADER\" class=\"linear-activity\"> <div class=\"indeterminate\"></div> </div><div id=\"DOCJS_MOBILE_TRIGGER\" onclick=\"SHOW_MENU()\" style=\"position:fixed;top:0;left:0;cursor:pointer;z-index: 9;display:block\"><i class=\"material-icons\">menu</i></div><div id='DOCJS_SIDEBAR' class='sidebar'><img src='" + docjs.logo + "' class='DOCJS_IMG'><h1 id='DOCJS_TITLE'>" + docjs.title + "<div class='search_before'onclick='OPEN_SEARCH()'><i class='material-icons'>search</i></div></h1><br>" + marked(this.responseText) + "<div id='DOCJS_OPTIONS'><p onclick='docjs_show_menu()'>" + docjs.title + "</p><div class='content'>Options<br><br><div class=\"theme-switch-wrapper\" id=\"DOCJS_THEMESWITCH\"> <label class=\"theme-switch\" for=\"checkbox\" style=\"margin:0;\"> <input type=\"checkbox\" id=\"checkbox\" style=\"margin:0;\" /> <div class=\"slider round\"></div> </label><span style=\"color: var(--font-color);margin-left: 10px;\">Dark Mode</span></div><br><label class=\"switch\"> <input type=\"checkbox\" id='DOCJS_DMODE_CHECKBOX' onclick=\"dark_sidenav()\"> <span class=\"slider round\"></span></label><span style='display:inline-block;color: var(--font-color);margin-left: 10px;bottom:-8px;position:relative'>Dark Sidenav</span> <br><br>Made by ❤️ by DocJS</div></div></div><div class='container' id='DOCJS_PAGE'><h2 id='DOCJS_PAGE_TITLE' style='margin-left: 30px;margin-top: 50px;border-bottom: 3px solid #E6ECF1;padding-bottom: 10px;width: 80% !important;overflow:hidden;'></h2><div id='DOCJS_PAGE_CONTENT'></div><div id='DOCJS_FOOTER'></div></div><div id=\"SIDENAV_OVERLAY\" onclick=\"CLOSE_MENU()\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;background: rgba(0,0,0,0.3);z-index:9999999;display:none\"></div><div id='search_popup'></div>";
                  var map = {}; onkeydown = onkeyup = function(e){ e = e || event; map[e.keyCode] = e.type == 'keydown'; if(map["191"]==true){ e.preventDefault(); document.getElementById('DOCJS_SEARCH').focus(); } }
              var divs = document.querySelectorAll('#DOCJS_SIDEBAR li a');
              var ID = 1;
              var cbox = document.querySelectorAll(".sidebar li a");

              function toggle(section) {
                  var sections = document.querySelectorAll('.sidebar li a');
                  for (i = 0; i < sections.length; i++) {
                      sections[i].classList.remove('red');
                  }
                  section.classList.add('red')
              }
              for (var i = 0; i < divs.length; i++) {
                var DIV = ID++;
                  divs[i].id = "DOCJS_LINK_" + DIV;
                  docjs_searchitems.push(divs[i].id);
                  divs[i].href = "#/" + divs[i].innerHTML.replace(/\s+/g, '-').toLowerCase();
                  // alert(docjs.directory + divs[i].hash)
                  if(docjs.domain + window.location.hash == divs[i].href) { defPage = divs[i].id;}
                  divs[i].onclick = function() {
                      NEXT_PAGE = parseInt(this.id.replace(/\D/g, '')) + 1;
                      PREV_PAGE = parseInt(this.id.replace(/\D/g, '')) - 1;
                      if (this.id !== 'DOCJS_LINK_1' && document.getElementById('DOCJS_LINK_' + PREV_PAGE)) {
                          HTML_PAGE_PREV = document.getElementById('DOCJS_LINK_' + PREV_PAGE).innerHTML;
                      }
                      if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {CLOSE_MENU()}
                      if(document.getElementById('DOCJS_LINK_' + NEXT_PAGE)){
                      HTML_PAGE_NEXT = document.getElementById('DOCJS_LINK_' + NEXT_PAGE).innerHTML;}
                      DOCJS_OPENPAGE(this.innerHTML);
                      toggle(this)
                  }
              }
              var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
              if (isIE11 === false) {
                  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                  document.documentElement.setAttribute('data-theme', 'light');
                  const currentTheme = localStorage.getItem('theme');

                  if (currentTheme) {
                      document.documentElement.setAttribute('data-theme', currentTheme);

                      if (currentTheme === 'dark') {
                          toggleSwitch.checked = true;
                      }
                  }

                  function switchTheme(e) {
                      if (e.target.checked) {
                          document.documentElement.setAttribute('data-theme', 'dark');
                          localStorage.setItem('theme', 'dark');
                      } else {
                          document.documentElement.setAttribute('data-theme', 'light');
                          localStorage.setItem('theme', 'light');
                      }
                  }

                  toggleSwitch.addEventListener('change', switchTheme, false);
              }
              // alert(defPage);
              if(document.body.contains(document.querySelector('#DOCJS_SIDEBAR li a#'+ defPage))) {
              document.querySelector('#DOCJS_SIDEBAR li a#'+ defPage).click();
              }
              else {            document.querySelector('#DOCJS_SIDEBAR li a').click();
  }
              function SHOW_MOBILE_SCREEN_QUERY(x) {
                  var SHOW_MOBILE_SCREEN_QUERYx = window.matchMedia("(max-width: 600px)");
                  SHOW_MOBILE_SCREEN_QUERY(SHOW_MOBILE_SCREEN_QUERYx);
                  SHOW_MOBILE_SCREEN_QUERYx.addListener(SHOW_MOBILE_SCREEN_QUERY);
                  if (SHOW_MOBILE_SCREEN_QUERYx.matches) {
                      document.getElementById('DOCJS_MOBILE_TRIGGER').style.display = 'block';
                      document.getElementById('DOCJS_SIDEBAR').onclick = function() {
                          CLOSE_MENU();
                          document.getElementById('SIDENAV_OVERLAY').style.display = "none";
                      }
                      document.onkeydown = function(evt) {
                          evt = evt || window.event;
                          var isEscape = false;
                          if ("key" in evt) {
                              isEscape = (evt.key === "Escape" || evt.key === "Esc");
                          } else {
                              isEscape = (evt.keyCode === 27);
                          }
                          if (isEscape) {
                              CLOSE_MENU();
                              document.getElementById('SIDENAV_OVERLAY').style.display = "none";
                          }
                      };
                  } else {
                      document.querySelector('#DOCJS_MOBILE_TRIGGER').style.display = 'none';
                      document.getElementById('SIDENAV_OVERLAY').style.display = "none";
                  }
              }

          }
      };


      xhttp.open("GET", "sidebar." + htmlmode, true);
      xhttp.send();
      if (docjs.copyToClipboard == true) {} else {
          document.body.setAttribute('data-copytoclipboard', 'false');
      }

      function DOCJS_OPENPAGE(value) {
          document.getElementById('DOCJS_PAGE_CONTENT').innerHTML = '<div style="text-align:center;padding: 25vh 0;"><svg class="spinner" viewBox="0 0 50 50"> <circle class="spinner__path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle> </svg><br><center><h4>Loading...</h4></center></div>';
          FILENAME = value.replace(/\s/g, '');
          if (FILENAME == 'Home') {
              FILENAME = 'README';
              document.getElementById('DOCJS_PAGE_TITLE').style.display = 'none';
          } else {
              document.getElementById('DOCJS_PAGE_TITLE').style.display = '';
              document.getElementById('DOCJS_PAGE_TITLE').innerHTML = value;
          }
          if (docjs.hideTitle == true) {
              document.getElementById('DOCJS_PAGE_TITLE').innerHTML = '';
          }
          document.getElementById('DOCJS_FOOTER').innerHTML = '<div style="width:90%;margin:auto"><button class="NAV_BTN left" id="PREV" onclick=\'document.querySelector("#DOCJS_LINK_' + parseInt(PREV_PAGE) + '").click()\'><i class=""></i> Previous<br><b>' + HTML_PAGE_PREV + '</b></button><button id="NEXT" class="NAV_BTN right" onclick=\'document.querySelector("#DOCJS_LINK_' + parseInt(NEXT_PAGE) + '").click()\'>Next<br><b>' + HTML_PAGE_NEXT + '</b></button></div>';
          if (value == 'Home') {
              document.getElementById('PREV').style.display = 'none'
          }
          document.onkeydown = checkKey;

  function checkKey(e) {

      e = e || window.event;
      if (e.keyCode == '37') {
        document.getElementById('PREV').click();
      }
      else if (e.keyCode == '39') {
        document.getElementById('NEXT').click();
      }

  }
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  data = xhttp.responseText;
                  var converter =
                      new showdown.Converter(),
                      text = '' + data + '',
                      html = converter.makeHtml(data);
                  document.getElementById('DOCJS_PAGE_CONTENT').innerHTML = html;
              }
          };
          xhttp.open("GET", docjs.directory + FILENAME + "." + htmlmode, true);
          xhttp.send();
      }
      if (docjs.navbar == true) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  var NAV_VALUE;
                  var converter = new showdown.Converter(),
                      text = '' + xhttp.responseText + '',
                      NAV_VALUE = converter.makeHtml(text);
                  document.getElementById(docjs.element).insertAdjacentHTML("afterend", '<nav id="DOCJS_NAV">' + NAV_VALUE + '</nav>');
              }
          };
          xhttp.open("GET", docjs.directory + "navbar." + htmlmode, true);
          xhttp.send();
      }
      if (typeof docjs.repo !== 'undefined') {
          document.getElementById(docjs.element).insertAdjacentHTML('afterend', '<a href="' + docjs.repo + '" target="_blank" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#FD6C6C; color:#fff; position: fixed;z-index:99999; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>')
      }
  }

function SHOW_MENU() {
    document.getElementById('DOCJS_SIDEBAR').style.left = 0;
    document.getElementById('SIDENAV_OVERLAY').style.display = "block"
}

function CLOSE_MENU() {
    document.getElementById('DOCJS_SIDEBAR').style.left = '-300px';
    document.getElementById('SIDENAV_OVERLAY').style.display = "none"
}

function filter_list() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("docjs_search_popup_input");
    filter = input.value.toUpperCase();
    ul = document.getElementById
    ("docjs_search_results_filter_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function docjs_show_menu() {
    document.getElementById('DOCJS_OPTIONS').classList.toggle('MENU_ACTIVE');
}

function dark_sidenav() {
    var checkbox = document.getElementById('DOCJS_DMODE_CHECKBOX')
    if (checkbox.checked == true) {
        document.body.setAttribute('data-lightTheme', '')
    } else {
        document.body.setAttribute('data-lightTheme', 'true')
    }

}
function OPEN_SEARCH() {
  document.getElementById('search_popup').innerHTML = '<div class="DOCJS_SEARCH_OVERLAY" onclick="CLOSE_SEARCH()"></div><div class="DOCJS_SEARCH_POPUP" id="DOCJS_SEARCH_POPUP"></div>';
  document.getElementById('DOCJS_SEARCH_POPUP').innerHTML = '<input id="docjs_search_popup_input" autocomplete="off" onkeyup="filter_list()" placeholder="Type to start searching..."> <ul class="docjs_search_results" id="docjs_search_results_filter_list"><div id="res"></div></ul>';
  document.getElementById('docjs_search_popup_input').focus();
  docjs_searchitems.forEach(element => document.getElementById('res').innerHTML += "<li><a href='#' onclick='document.getElementById(\""+element+"\").click();CLOSE_SEARCH()'>" + document.getElementById(element).innerHTML + "</a></li>");
}
function CLOSE_SEARCH() {
  document.getElementById('search_popup').innerHTML = ''
}
