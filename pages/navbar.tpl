<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">

    {# Navbar Title #}
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Mobile Logs</a>
    </div>


      <ul class="nav navbar-nav">
        {% for page in breadCrumbs %}
          {% if not loop.first %}
          <li
            {% if page.active %}
              class="active"
            {% endif %}>
            <a href="{{ page.url }}">
              {{ page.title }}
            </a>
          </li>
          {% endif %}
        {% endfor %}
      </ul>

  </div>
</nav>
