function changeTheme() {
    if($("html").attr("data-bs-theme")){
        $("html").removeAttr("data-bs-theme");
        $("#dark-mode").text("🌞");
    } else {
        $("html").attr("data-bs-theme", "dark");
        $("#dark-mode").text("🌑");
    }
}