# SAR Ground Subsidence Monitoring Dashboard

Real-time displacement monitoring system for ground subsidence using SAR data.

## GitHub Pages 公開手順

このリポジトリをGitHub Pagesで公開するには、以下の手順を実行してください：

1. GitHubリポジトリ（https://github.com/OCGlobal/sar-mock）にアクセス
2. 「Settings」タブをクリック
3. 左メニューから「Pages」を選択
4. 「Source」セクションで「Deploy from a branch」を選択
5. 「Branch」で「main」を選択し、「/ (root)」を選択
6. 「Save」をクリック

数分後、以下のURLでアクセス可能になります：
- https://ocglobal.github.io/sar-mock/

## ローカルでの実行

このプロジェクトは静的HTMLファイルなので、ローカルで実行するには：

1. ファイルをダウンロード
2. `index.html`をブラウザで開く

または、ローカルサーバーを使用：

```bash
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx http-server
```

その後、ブラウザで `http://localhost:8000` にアクセス

## ファイル構成

- `index.html` - メインのダッシュボード
- `sar-disp.csv` - SARデータ
- `survey-disp.xlsx` - 測量データ
- `CP202.geojson` - CP202路線データ
- `Jakarta_MRT_NS_Line.geojson` - MRT路線データ
- `sheild_face_ch_converted.csv` - シールドフェイスデータ

## 機能

- 時系列データの可視化
- インタラクティブマップ
- ポイント選択と比較
- 時間スライダーによる時系列表示
- ランキング表示（最大/最小変位）

