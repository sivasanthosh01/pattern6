count=0;
for(i=1;i<=5;i++){
    for(j=1;j<i;j++){
        document.write("&nbsp;&nbsp;");
    }
    for(k=5;k>=i;k--){
        document.write(k-count);
    }
    document.write("<br>");
    count++;
}