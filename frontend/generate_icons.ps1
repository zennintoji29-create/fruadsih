Add-Type -AssemblyName System.Drawing

$logoPath = "C:\Users\subha\Downloads\sihhfraud\frontend\public\logo.jpg"
$srcImg = [System.Drawing.Image]::FromFile($logoPath)

$sizes = @{
    "mipmap-mdpi" = 48
    "mipmap-hdpi" = 72
    "mipmap-xhdpi" = 96
    "mipmap-xxhdpi" = 144
    "mipmap-xxxhdpi" = 192
}

foreach ($folder in $sizes.Keys) {
    $size = $sizes[$folder]
    $targetDir = "C:\Users\subha\Downloads\sihhfraud\frontend\android\app\src\main\res\" + $folder
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($srcImg, 0, 0, $size, $size)
    $g.Dispose()
    
    $bmp.Save(($targetDir + "\ic_launcher.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save(($targetDir + "\ic_launcher_round.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Save(($targetDir + "\ic_launcher_foreground.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Generated icons for $folder ($size x $size)"
}

$srcImg.Dispose()
Write-Host "All Android launcher icons generated successfully!"
