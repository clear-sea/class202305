/* 加载图片相关 */
function loadImgs() {
    for (let index = 1; index <= 12; index++) {
        document.writeln(`<link rel="preload" href="resource/imgs/meme${index}.jpg" as="image">`)
    }
    const n = Math.floor(Math.random()*100);
    if(n<=50){
        return "https://bing.img.run/rand.php"
    }
    else{
        return "resource/imgs/bg.jpg"
    }
}
/* 单双周相关 */
function getDaysBetween(startDay,endDay) {
    const sDay=Date.parse(startDay);
    const eDay=Date.parse(endDay);
    // count down
    if(sDay>eDay){
        return 0;
    }
    else {
        return Math.floor((eDay-sDay)/(1*24*60*60*1000));
    }
}

function countDownCEE(){
    //college entrance exam coutn down
    const sDay=new Date(Date.now());
    return getDaysBetween(sDay,"2027-06-07");
}

function SD() {
    //judge single week and double week
    //"True" means single week and "False" means double week
    const startDay="2023-10-23"; // 单周起始日
    days=getDaysBetween(startDay,Date(Date.now()));
    if (days<=7){
        return "单周";
    }
        
    else if (days>7){
        if ((days/7)/2!=0){
            return "双周";
        }
        else {
            return "单周";
        }
    }
}

function showCount(){
    document.writeln("<p>"+countDownCEE()+"天</p>");
}

function showSD(){
    document.writeln("<p>本周:"+SD()+"</p>");
}

/* copyright相关 */
function writeCopyright(){
    var date=new Date();
    year=date.getFullYear();
    syear=new String(year);
    document.writeln("<!--Copyright-->");
    document.writeln("<p>Copyright © 2022-"+syear+"&nbsp<a href=\'clear-sea.github.io\'>清澈的海水</a>&nbsp鲁ICP备 114514&nbsp|&nbsp<a href=\'#about\' class=\"link\">关于</a></p>");
}

/* 切换模式相关 */
function changeStyle() {
    const themeToggle = document.getElementById('theme-toggle');
    // 获取当前模式
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // 切换模式
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent="☀️";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent="🌙";
    }
}
/* 加载动画相关 */
function hideSpinner() {
    const spinner = document.getElementById("loading-spinner");
    const element = document.getElementById("body-block");
    spinner.style.display = 'none';
    element.style.display = 'block';
    document.getElementById("body").style.position = 'relative';
}

function hideImgSpinner() {
    const spinner = document.getElementById("loading-img-spinner");
    spinner.style.display = 'none';
}